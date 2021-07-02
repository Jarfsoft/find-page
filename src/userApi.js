const getUsers = () => {
  fetch('https://jarfsoft-houses-api.herokuapp.com/users').then((response) => response.json()).then((data) => data);
};

const postUser = (user) => {
  fetch('https://jarfsoft-houses-api.herokuapp.com/users', {
    method: 'POST',
    body: JSON.stringify({
      name: user,
  }),
  headers: {
      "Content-type": "application/json"
  }.then((response) => response.json()).then((json) => json)
  });
};

export { getUsers, postUser };
