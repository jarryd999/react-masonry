import '../actionTypes.js';

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
		return fetch('https://api.500px.com/v1/photos?feature=popular&sort=created_at&page=' + 
			pageNum + '&image_size=1&include_store=store_download&include_states=voted')
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