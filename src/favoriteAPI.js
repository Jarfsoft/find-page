const getFavorites = (setFavorites) => {
  fetch('https://jarfsoft-houses-api.herokuapp.com/user_devices')
    .then((response) => response.json())
    .then((json) => {
      setFavorites(json.data);
    });
};

const postFavorite = (data, setFavorites) => {
  fetch('https://jarfsoft-houses-api.herokuapp.com/user_devices', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json()).then((json) => {
    if (json.status === 'SUCCESS') {
      getFavorites(setFavorites);
    }
  });
};

const deleteFavorite = (data, setFavorites) => {
  fetch(`https://jarfsoft-houses-api.herokuapp.com/user_devices/${data.id}`, {
    method: 'DELETE',
  }).then((res) => res.json()).then((json) => {
    if (json.status === 'SUCCESS') getFavorites(setFavorites);
  });
};

export { getFavorites, postFavorite, deleteFavorite };
