const defaultState = {
  page: 'Devices',
};

const navbar = (state = defaultState, action) => {
  const newState = { page: '' };
  switch (action.type) {
    case 'PAGE':
      newState.page = action.payload;
      return newState;
    default:
      return state;
  }
};

export default navbar;
