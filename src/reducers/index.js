import {REQUEST_IMAGES, RECEIVE_IMAGES, RERENDER_COLUMNS} from '../actionTypes.js';

const INITIAL_IMAGES = {
	images: null,
	imageCount: 0,
	isFetching: false
};

export function imageState(state = INITIAL_IMAGES, action) {
	switch (action.type) {
		case REQUEST_IMAGES:
			return Object.assign({}, state, {isFetching: true});

		case RECEIVE_IMAGES:
			return Object.assign({}, state, {
				isFetching: false,
				images: Object.assign({}, state.images, action.data)
			});

		case RERENDER_COLUMNS:
			let columns = [];
			let columnCount = action.data;
			let currColumn = 0;

			for (var i = 0; i < columnCount; i++){
				columns[i] = {
					height: 0, image_ids: null
				};
			}

			for (var i = 0; i < state.images.length; i++){
				for (var j = 0; j < columnCount - 1; j++){
					shortestColumn = columns[j]	
				}
				
				columns[currColumn].push(state.images[i].id);
			}
			return columns;

		default:
			return state
	}
}