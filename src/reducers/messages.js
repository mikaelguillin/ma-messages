const initialState = {
  selected: '',
  messages: []
};

const messages = (state = initialState, action) => {
	switch(action.type) {
    case 'SET_REALTOR':
      return {
        ...state,
        selected: action.id
      };
    case 'SET_MESSAGES_LIST':
      return {
        ...state,
        messages: action.data
      };
    case 'MARK_AS_READ':
      return state.map(message =>
        (message.id === action.id)
        ? {...message, read: true}
        : message
      );
    default:
      return state;
  }
};

export default messages;