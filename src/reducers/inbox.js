const initialState = {

};

const inbox = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_UNREAD_MESSAGES':
			return {
				...state,
				number: action.number
			};
		default:
			return state;
	}
};

export default inbox;