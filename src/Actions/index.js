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
  devices: (data) => ({
    type: 'DEVICES',
    payload: data,
  }),
  favorites: (data) => ({
    type: 'FAVORITES',
    payload: data,
  }),
  empty: () => ({
    type: 'EMPTY',
  }),
};

export default actions;
