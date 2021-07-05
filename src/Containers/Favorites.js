import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getDevices from '../deviceAPI';
import actions from '../Actions';
import Device from '../Components/Device';

function Favorites() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const devices = useSelector((state) => state.devices);
  dispatch(actions.page('Favorites'));
  const favorites = useSelector((state) => state.favorites).filter(
    (f) => f.user_ID === user.userId,
  );
  const setDevices = (data) => {
    dispatch(actions.devices(data));
  };
  useEffect(() => {
    getDevices(setDevices);
  }, []);
  return (
    <div className="App">
      {devices.filter(
        ((d) => favorites.find((f) => f.device_ID === d.id) !== undefined),
      ).map((d) => (
        <Device
          key={d.name}
          imageUrl={d.image_url}
          id={d.id}
          name={d.name}
          price={d.price}
        />
      ))}
    </div>
  );
}

export default Favorites;
