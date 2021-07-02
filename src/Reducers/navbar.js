const defaultState = {
  user: 0,
  page: 'Device',
};

const navbar = (state = defaultState, action) => {
  const newState = { user: 0, page: '' };
  switch(action.type) {
    case 'USER':
      newState.user = action.payload;
      newState.page = state.page;
      return newState;
    case 'PAGE':
      newState.user = state.user;
      newState.paga = action.payload;
      return newState;
    default:
      return state;
  }
};

export default navbar;
