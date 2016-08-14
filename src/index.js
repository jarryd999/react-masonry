import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';  
import * as reducers from './reducers/index.js';

import { App } from './components';
import { ColumnOuterContainer } from './containers';
import { initializeSDK } from './actions';

import './index.scss';

const store = createStore(
	combineReducers(reducers),
	applyMiddleware(thunkMiddleware)
);

store.dispatch(initializeSDK());

ReactDOM.render(
    <Provider store={store}>
        <App >
            <ColumnOuterContainer/>
        </App>
    </Provider>,
    document.getElementById('root')
);