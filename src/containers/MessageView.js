import { connect } from 'react-redux';
import { closeMessageView } from '../actions';
import MessageView from '../components/MessageView/MessageView';

const mapStateToProps = state => {
	return state.message
};

const mapDispatchToProps = dispatch => ({
	closeMessage: () => dispatch(closeMessageView())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageView);