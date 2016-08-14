import ColumnOuter from '../components/ColumnOuter.js';
import toggleFavorite from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

	return {
		columnCount: state.columnState.columnCount
	}
}

const ColumnOuterContainer = connect(mapStateToProps)(ColumnOuter);
export default ColumnOuterContainer;
