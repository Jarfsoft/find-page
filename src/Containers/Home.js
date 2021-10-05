import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../Actions';

import getDevices from '../deviceAPI';
import Device from '../Components/Device';
import './Home.css';

function Home() {
  const dispatch = useDispatch();
  const devices = useSelector((state) => state.devices);
  dispatch(actions.page('Devices'));
  const setDevices = (data) => {
    dispatch(actions.devices(data));
  };
  useEffect(() => {
    getDevices(setDevices);
  }, []);
  return (
    <div className="App">
      {devices ? devices.map((d) => (
        <Device
          key={d.name}
          imageUrl={d.image_url}
          id={d.id}
          name={d.name}
          price={d.price}
        />
      )) : <div className="loading" />}
    </div>
  );
}

export default Home;
