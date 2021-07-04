const actions = {
  page: (name) => ({
    type: 'PAGE',
    payload: name,
  }),
  login: (user) => ({
    type: 'LOGIN',
    payload: user,
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
};

export default actions;
