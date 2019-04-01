const initialState = {
	selected: 101,
	realtors: {}
};

const realtors = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_REALTOR':
			console.log('SET_REALTOR', {
				...state,
				selected: action.id
			});
			return {
				...state,
				selected: action.id
			};
		case 'SET_REALTORS_LIST':
			console.log('SET_REALTORS_LIST', action.data);
			return {
				...state,
				realtors: action.data
			}
		default:
			return state;
	}
};

export default realtors;