const messagesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case "FETCH_MESSAGES":
      return action.payload;
    default:
      return state;
  }
};

export default messagesReducer;
