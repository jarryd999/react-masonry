import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';  
import * as reducers from './reducers/index.js';
import './500px.js';

import { App } from './components';



_500px.init({
    sdk_key: 'f6464424ffcd37fbc0119bfc0119d7b34eaa622b'
  });

const store = createStore(
	combineReducers(reducers),
	applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <App >
            <Tile/>
        </App>
    </Provider>,
    document.getElementById('root')
);