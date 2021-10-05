const getUser = (name, setUser) => {
  setUser(-1);
  fetch('https://jarfsoft-houses-api.herokuapp.com/users')
    .then((response) => response.json())
    .then((json) => {
      const user = json.data.filter((u) => u.name === name)[0];
      if (user) {
        setUser({ id: user.id, name: user.name });
      } else setUser(undefined);
    });
};

const postUser = (user, setUser) => {
  fetch('https://jarfsoft-houses-api.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name: user }),
  }).then((res) => res.json()).then((json) => {
    setUser(json);
  });
};

export { getUser, postUser };
