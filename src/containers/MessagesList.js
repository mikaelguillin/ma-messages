import { connect } from 'react-redux';
import axios from 'axios';
import { markAsRead } from '../actions';
import { setMessagesList } from '../actions';
import MessagesList from '../components/MessagesList/MessagesList';

const mapStateToProps = state => ({
	selected: state.selected,
	...state.messages
});

const mapDispatchToProps = dispatch => ({
	getMessagesList: realtor => {
	  axios.get(`http://localhost:8080/realtors/${realtor}/messages`)
	    .then(res => {
	      const messages = res.data;
	      dispatch(setMessagesList(messages));
	    });
	}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesList);