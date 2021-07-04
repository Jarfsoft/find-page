const getUser = (name, setUser) => {
  fetch('https://jarfsoft-houses-api.herokuapp.com/users')
    .then((response) => response.json())
    .then((json) => {
      const user = json.data.filter((u) => u.name === name)[0];
      if (user) {
        setUser({ id: user.id, name: user.name });
      }
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
    if (json.status === 'SUCCESS') setUser({ id: json.data.id, name: json.data.name });
  });
};

export { getUser, postUser };
