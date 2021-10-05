import { React } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Device.css';

function Device({
  imageUrl, id, name, price,
}) {
  return (
    <div className="device-card">
      <Link to={`/device/${id}`}>
        <img alt="Device" src={imageUrl} />
        <div className="info">
          {name}
          <span>{`$ ${price}`}</span>
        </div>
      </Link>
    </div>
  );
}

Device.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Device;
