import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../Actions';
import './DeviceDetails.css';

function DeviceDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const data = useSelector((state) => state.devices).find((d) => d.id.toString() === params.id);
  dispatch(actions.page(data.name));
  return (
    <div className="details-frame">
      <img alt="device" src={data.image_url} />
      <h1>About the device: </h1>
      <p>{data.description}</p>
    </div>
  );
}

export default DeviceDetails;
