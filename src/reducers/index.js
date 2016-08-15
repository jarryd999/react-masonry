import { TOGGLE_FAVORITE, INCREMENT_FAVORITE_COUNT, DECREMENT_FAVORITE_COUNT, REQUEST_IMAGES, RECEIVE_IMAGES, RERENDER_COLUMNS, ADD_IMAGES, SET_COLUMN_COUNT } from '../constants/actionTypes.js';

const INITIAL_IMAGES = {
	images: [],
	isFetching: false,
	pageNum: 1
};

const INITIAL_COLUMNS = {
	columnImages: [[],[],[]],
	columnCount: 3,
	columnHeights: [[0],[0],[0]]
};

const INITIAL_TOPBAR = {
	favoriteCount: 0
}

export function imageState(state = INITIAL_IMAGES, action) {
	switch (action.type) {
		case REQUEST_IMAGES:
			return Object.assign({}, state, {isFetching: true});

		case RECEIVE_IMAGES:
			return Object.assign({}, state, {
				pageNum: state.pageNum + 1, 
				isFetching: false,
				images: [...state.images, ...action.data]
			});

		case TOGGLE_FAVORITE:
			return Object.assign({}, state, {images: state.images.map(image => {
				if (image == action.data){
					image.favorite = !image.favorite;
				}
				return image;
			})})
		default:
			return state
	}
}

export function columnState(state = INITIAL_COLUMNS, action) {
	switch (action.type) {
		case ADD_IMAGES:

			let images = action.data;
			let newImages = [[]];
			let newHeights = [[0]];
			for (let i = 0; i < state.columnCount; i++){
				newImages.push([]);
				newHeights.push([0]);
			}

			// create a new state object to build from scratch
			let newState = {columnCount: state.columnCount, columnImages: newImages, columnHeights: newHeights};

			for (let index = 0; index < images.length; index++){
				let image = images[index];
				// Identify the column with the most room to add an image
				// and stick the new image in there
				let smallestColumn = { height: newState.columnHeights[0], columnId: 0 };
				for (let i = 1; i < state.columnCount; i++) {
					if ( smallestColumn.height > newState.columnHeights[i] ) {
						smallestColumn.height = newState.columnHeights[i];
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

export function topbarState(state = INITIAL_TOPBAR, action) {
	switch (action.type) {
		case INCREMENT_FAVORITE_COUNT:
			return { favoriteCount: state.favoriteCount + 1 }

		case DECREMENT_FAVORITE_COUNT:
			return { favoriteCount: state.favoriteCount - 1 }
		default:
			return state
	}
}