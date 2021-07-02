const actions = {
  user: (id) => ({
    type: 'USER',
    payload: id,
  }),
  page: (name) => ({
    type: 'PAGE',
    payload: name,
  }),
};

export default actions;