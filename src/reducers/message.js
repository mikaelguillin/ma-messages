const initialState = {
  message: {},
  visible: true
};

const message = (state = initialState, action) => {
  switch(action.type) {
    case 'CLOSE_MESSAGE_VIEW':
      return {
        ...state,
        visible: false
      }
    case 'SET_MESSAGE_VIEW':
      return {
        ...state,
        message: action.data,
        visible: true
      };
    default:
      return state;
  }
};

export default message;