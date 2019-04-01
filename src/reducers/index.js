import { combineReducers } from 'redux';
import realtors from './realtors';
import messages from './messages';
import message from './message';

export default combineReducers({
	realtors,
	messages,
	message
});