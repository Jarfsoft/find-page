const defaultState = {
  userId: 0,
  name: '',
};

const users = (state = defaultState, action) => {
  const newState = { userId: 0, name: '' };
  switch (action.type) {
    case 'LOGIN':
      newState.userId = action.payload.id;
      newState.name = action.payload.name;
      return newState;
    case 'LOGOUT':
      return newState;
    default:
      return state;
  }
};

export default users;
