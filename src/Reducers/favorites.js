const defaultState = [];

const favorites = (state = defaultState, action) => {
  const newState = [];
  switch (action.type) {
    case 'FAVORITES':
      newState.push(...action.payload);
      return newState;
    case 'EMPTY':
      return newState;
    default:
      return state;
  }
};

export default favorites;
