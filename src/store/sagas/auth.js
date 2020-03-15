import { put, delay, call } from 'redux-saga/effects';
import * as actions from '../actions/main';
import axios from 'axios';

export function* authCheckStateSaga(action) {
    const token = yield localStorage.getItem('token');
    if(!token) {
      yield put(actions.logout());
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
        if(expirationDate <= new Date()) {
            yield put(actions.logout());
        } else {
        const userId = yield localStorage.getItem('userId');
        const authTimeout = yield expirationDate.getTime() - new Date().getTime();
        yield put(actions.authSuccess(token, userId));
       yield put(actions.checkAuthTimeout(authTimeout / 1000));
      }
    }
};

export function* logoutSaga(action) {
    yield call([localStorage, 'removeItem'], "token");
  //  yield localStorage.removeItem('token');
  yield call([localStorage, 'removeItem'], "expirationDate");
//  yield localStorage.removeItem('expirationDate');
yield call([localStorage, 'removeItem'], "userId");
  //  yield localStorage.removeItem('userId');
   yield put(actions.logoutSucceeded());
   // saga over
};

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
};

export function* authenticateUserSaga(action) {
    yield put(actions.authStart());
    let authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAYEjYvDiZPquoPA0oD2WOjfV6QQ6VS5HM';
    if(!action.inSignupMode) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYEjYvDiZPquoPA0oD2WOjfV6QQ6VS5HM'; 
     }
    
     try {
  const response = yield axios.post(url, authData)
    const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
    yield localStorage.setItem('token', response.data.idToken);
       yield localStorage.setItem('expirationDate', expirationDate);
      yield  localStorage.setItem('userId', response.data.localId);
      yield put(actions.authSuccess(response.data.idToken, response.data.localId));
      yield put(actions.checkAuthTimeout(response.data.expiresIn));
     }
     catch (error) {
        yield put(actions.authFail(error.response.data.error));
     }
};