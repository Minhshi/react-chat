const messagesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case "FETCH_MESSAGES":
      return action.payload;
    case "CREATE_MESSAGE": {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    default:
      return state;
  }
};

export default messagesReducer;
