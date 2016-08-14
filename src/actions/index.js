import {TOGGLE_FAVORITE, INCREMENT_FAVORITE_COUNT, DECREMENT_FAVORITE_COUNT, REQUEST_IMAGES, RECEIVE_IMAGES, RERENDER_COLUMNS} from '../constants/actionTypes.js';
import { API_BASE, POPULAR } from '../constants/requests.js';

export function toggleFavorite(image){
	return {
		type: TOGGLE_FAVORITE,
		data: image
	}
}

export function incrementFavoriteCount(){
	return {
		type: INCREMENT_FAVORITE_COUNT
	}
}

export function decrementFavoriteCount(){
	return{
		type: DECREMENT_FAVORITE_COUNT
	}
}

export function requestImages(){
	return {
		type: REQUEST_IMAGES
	}
}

export function fetchImages(pageNum){
	return dispatch => {
		dispatch(requestImages());
		return fetch(API_BASE + POPULAR + pageNum)
			.then(response => response.json())
			.then(json => {
				dispatch(receiveFilters(images));
		})
	}
}

export function receiveImages(images){
	return {
		type: RECEIVE_IMAGES,
		data: images
	}
}

export function rerenderColumns(columnCount) {
	return {
		type: RERENDER_COLUMNS,
		data: columnCount
	}
}