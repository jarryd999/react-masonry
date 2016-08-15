import Column from '../components/Column.js';
import { toggleFavorite, incrementFavoriteCount, decrementFavoriteCount } from '../actions/index.js';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {

	return {
		images: state.columnState.columnImages[ownProps.columnId].map( imageId => {state.imageState.images[imageId].id = imageId; return state.imageState.images[imageId]} )
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTileClick: (image) => {
			dispatch(toggleFavorite(image));
			if (image.favorite)
				dispatch(incrementFavoriteCount());
			else
				dispatch(decrementFavoriteCount());
		}
	};
};

const ActiveColumn = connect(mapStateToProps, mapDispatchToProps)(Column);
export default ActiveColumn;