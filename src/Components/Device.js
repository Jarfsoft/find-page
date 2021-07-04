import { React } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Device.css';

function Device({
  imageUrl, id, name, price,
}) {
  return (
    <div className="device-card">
      <img alt="Device" src={imageUrl} />
      <div className="info">
        <Link to={`/device/${id}`}>{name}</Link>
        <span>{`$ ${price}`}</span>
      </div>
    </div>
  );
}

Device.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Device;
