import { combineReducers } from 'redux';
import realtors from './realtors';
import messages from './messages';
import message from './message';
import inbox from './inbox';

export default combineReducers({
	realtors,
	messages,
	message,
	inbox
});