/* eslint-disable react/forbid-prop-types */

import { React } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Device.css';

function Device({ data }) {
  return (
    <div className="device-card">
      <img alt="Device" src={data.image_url} />
      <div className="info">
        <Link to={`/device/${data.id}`}>{data.name}</Link>
        <span>{`$ ${data.price}`}</span>
      </div>
    </div>
  );
}

Device.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Device;

/* eslint-enable react/forbid-prop-types */
