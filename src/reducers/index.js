import { REQUEST_IMAGES, RECEIVE_IMAGES, RERENDER_COLUMNS, ADD_IMAGES, SET_COLUMN_COUNT } from '../constants/actionTypes.js';

const INITIAL_IMAGES = {
	images: [],
	isFetching: false
};

const INITIAL_COLUMNS = {
	columnImages: [[],[],[]],
	columnCount: 3,
	columnHeights: [[0],[0],[0]]
};

export function imageState(state = INITIAL_IMAGES, action) {
	switch (action.type) {
		case REQUEST_IMAGES:
			return Object.assign({}, state, {isFetching: true});

		case RECEIVE_IMAGES:
			return Object.assign({}, state, {
				isFetching: false,
				images: action.data
			});

		default:
			return state
	}
}

export function columnState(state = INITIAL_COLUMNS, action) {
	switch (action.type) {
		case ADD_IMAGES:

			let images = action.data;
			let newState = Object.assign({}, state);

			for (let index = 0; index < images.length; index++){
				let image = images[index];
				// Identify the column with the most room to add an image
				// and stick the new image in there
				let smallestColumn = { height: state.columnHeights[0], columnId: 0 };
				for (let i = 1; i < state.columnCount; i++) {
					if ( smallestColumn.height > state.columnHeights[i] ) {
						smallestColumn.height = state.columnHeights[i];
						smallestColumn.columnId = i;
					}
				}

				// create the new state object, add the image id to it's image list
				// and increase it's height tracker
				newState.columnImages[smallestColumn.columnId].push(index);
				newState.columnHeights[smallestColumn.columnId] = parseFloat(newState.columnHeights[smallestColumn.columnId]) + parseFloat(image.heightIndex);
			}
			return newState

		case SET_COLUMN_COUNT:
			return Object.assign({}, state, {columnCount: action.data})

		default:
			return state
	}
}