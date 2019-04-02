import { connect } from 'react-redux';
import InboxCounter from '../components/InboxCounter/InboxCounter';

const mapStateToProps = state => ({
	number: state.number,
	...state.inbox
});

export default connect(
  mapStateToProps,
  null
)(InboxCounter);