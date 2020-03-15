import { takeEvery, all } from 'redux-saga/effects';
import * as sagas from './allSagas';
import * as actionTypes from '../actions/actionTypes';

export function* watchAllSagas() {
    // auth sagas:
    yield all([
        takeEvery(actionTypes.AUTH_INIT_LOGOUT, sagas.logoutSaga),
        takeEvery(actionTypes.AUTH_TIMEOUT, sagas.checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTHENTICATE_USER, sagas.authenticateUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, sagas.authCheckStateSaga)    
    ]);
    // burger builder sagas:
    yield takeEvery(actionTypes.INIT_INGREDIENTS, sagas.initIngredientsSaga);
    // takeLatest - detects latest click
};