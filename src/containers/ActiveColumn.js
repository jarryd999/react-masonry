import Column from '../components/Column.js';
import toggleFavorite from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {

	return {
		images: state.columnState.columnImages[ownProps.columnId].map( imageId => state.imageState.images[imageId])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTileClick: (image) => {
			dispatch(toggleFavorite(image));
		}
	};
};

const ActiveColumn = connect(mapStateToProps, mapDispatchToProps)(Column);
export default ActiveColumn;