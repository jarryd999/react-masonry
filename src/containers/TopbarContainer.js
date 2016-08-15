import { connect } from 'react-redux';
import { TopBar } from '../components/';

const mapStateToProps = (state) => {
	return { favoriteCount: state.topbarState.favoriteCount }
}

const TopbarContainer = connect(mapStateToProps)(TopBar);

export default TopbarContainer;