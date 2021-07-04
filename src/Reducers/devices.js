const defaultState = [];

const devices = (state = defaultState, action) => {
  const newState = [];
  switch (action.type) {
    case 'DEVICES':
      newState.push(...action.payload);
      return newState;
    default:
      return state;
  }
};

export default devices;
