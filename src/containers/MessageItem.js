import { connect } from 'react-redux';
import axios from 'axios';
import { setMessageView } from '../actions';
import MessageItem from '../components/MessageItem/MessageItem';

const mapStateToProps = state => {
	return state.message;
};

const mapDispatchToProps = dispatch => ({
	getMessageView: (realtor, message) => {
	  axios.get(`http://localhost:8080/realtors/${realtor}/messages/${message}`)
	    .then(res => {
	      const messageData = res.data;
	      dispatch(setMessageView(messageData));
	    });
	}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageItem);