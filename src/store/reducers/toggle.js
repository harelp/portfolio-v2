const toggleReducer = (state = false, action) => {
  switch (action.type) {
    case 'ISOPEN':
      return !state;
    case 'ISNOTOPEN':
      return false;

    default:
      return state;
  }
};

export default toggleReducer;
