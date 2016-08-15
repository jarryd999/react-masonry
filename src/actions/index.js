import { TOGGLE_FAVORITE, INCREMENT_FAVORITE_COUNT, DECREMENT_FAVORITE_COUNT, REQUEST_IMAGES, RECEIVE_IMAGES, RERENDER_COLUMNS, ADD_IMAGES, SET_COLUMN_COUNT } from '../constants/actionTypes.js';
import { API_FEATURE, SDK_KEY } from '../constants/requests.js';
import '../500px.js';

export function initializeSDK(){
	return dispatch => {
		_500px.init({
		    sdk_key: SDK_KEY
		});

		_500px.getAuthorizationStatus(function (status) {
		    if (status == 'not_logged_in' || status == 'not_authorized') {
		        _500px.login();
		    }
		});

		dispatch(fetchImages());
	}
}

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

export function fetchImages(){
	return (dispatch, getState) => {
		let pageNum = getState().imageState.pageNum;

		dispatch(requestImages());
		_500px.api('/photos', {feature: API_FEATURE, page: pageNum, image_size: '4' }, (response) => {

			// report error if unable to load pictures
			if (response.error){
				alert("Error: " + response.error_message);
				return;
			}
			let images = response.data.photos.map( image => {
				return { 
					url: image.image_url,
				 	views: image.times_viewed, 
				 	id: null,
				 	heightIndex: image.height / image.width,
				 	favorite: false,
				 	loaded: false
				}
			});
			dispatch(receiveImages(images));
			dispatch(addImages(getState().imageState.images));
		});
	}
}

export function receiveImages(images){
	return {
		type: RECEIVE_IMAGES,
		data: images
	}
}

export function setColumnCount(columnCount) {
	return {
		type: SET_COLUMN_COUNT,
		data: columnCount
	}
}

export function rerenderColumns(columnCount) {
	return {
		type: RERENDER_COLUMNS,
		data: columnCount
	}
}

export function addImages(images) {
	return {
		type: ADD_IMAGES,
		data: images
	}
}
