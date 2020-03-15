import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import createSagaMiddleWare from 'redux-saga';
import * as sagas from './store/sagas/allSagas';
import thunk from 'redux-thunk'; 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import authReducer from './store/reducers/auth';
import burgerBreadReducer from './store/reducers/burgerBread';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
burgerBuilder: burgerBuilderReducer,
burgerBread: burgerBreadReducer,
order: orderReducer,
auth: authReducer
});

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(sagas.watchAllSagas);

const app = (
<Provider store={store}>
<BrowserRouter>
    <App />
</BrowserRouter>
</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();