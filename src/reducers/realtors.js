const initialState = {
	selected: 101,
	realtors: {}
};

const realtors = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_REALTOR':
			return {
				...state,
				selected: action.id
			};
		case 'SET_REALTORS_LIST':
			return {
				...state,
				realtors: action.data
			}
		default:
			return state;
	}
};

export default realtors;