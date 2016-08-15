import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';  
import * as reducers from './reducers/index.js';

import { App } from './components';
import { ColumnOuterContainer, TopbarContainer } from './containers';
import { initializeSDK, setColumnCount, addImages, fetchImages } from './actions';

import './index.scss';

const store = createStore(
	combineReducers(reducers),
	applyMiddleware(thunkMiddleware)
);


store.dispatch(initializeSDK());

determineColumnCount(store);

window.onresize = determineColumnCount;
window.onscroll = infiniteScrollLoader;


ReactDOM.render(
    <Provider store={store}>
        <App >
        	<TopbarContainer/>
            <ColumnOuterContainer/>
        </App>
    </Provider>,
    document.getElementById('root')
);




// Helper functions for window events

function determineColumnCount(){
	if (window.innerWidth <= 800)
		store.dispatch(setColumnCount(2));
	else
		store.dispatch(setColumnCount(3));

	store.dispatch(addImages(store.getState().imageState.images));
}

function infiniteScrollLoader(){
	if (getScrollPercent() >= 95 && !store.getState().imageState.isFetching){
		store.dispatch(fetchImages());
	}
}
function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return h[st]||b[st] / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}
