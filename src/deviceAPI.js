const getDevices = (setDevices) => {
  fetch('https://jarfsoft-houses-api.herokuapp.com/devices')
    .then((response) => response.json())
    .then((json) => {
      setDevices(json);
    });
};

export default getDevices;
