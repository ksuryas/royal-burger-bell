import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'; 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import burgerBuilderReducer from './store/reducer/burgerBuilder';
import orderReducer from './store/reducer/order';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import authReducer from './store/reducer/auth';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
burgerBuilder: burgerBuilderReducer,
order: orderReducer,
auth: authReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
<Provider store={store}>
<BrowserRouter>
    <App />
</BrowserRouter>
</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();