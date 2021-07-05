import { React } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { postFavorite, deleteFavorite } from '../favoriteAPI';
import actions from '../Actions';
import './DeviceDetails.css';

function DeviceDetails() {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const params = useParams();
  const data = useSelector((state) => state.devices); //.find((d) => d.id.toString() === params.id);
  console.log(user);
  dispatch(actions.page(data.name));
  const favorites = useSelector((state) => state.favorites).filter(
    (f) => f.device_ID === parseInt(params.id, 10) && f.user_ID === user.userId,
  );
  const setFavorites = (f) => {
    dispatch(actions.favorites(f));
  };
  const clickHandlerAdd = () => {
    postFavorite({ user_ID: user.userId, device_ID: parseInt(params.id, 10) }, setFavorites);
  };
  const clickHandlerRemove = () => {
    deleteFavorite(favorites[0], setFavorites);
  };
  const callButton = () => {
    if (!favorites[0]) return (<button onClick={clickHandlerAdd} type="button">Add to Favorites</button>);
    return (<button onClick={clickHandlerRemove} type="button">Remove from Favorites</button>);
  };
  return (
    <div className="details-frame">
      <div className="image-container">
        <img alt="device" src={data.image_url} />
        {user.userId !== 0 ? callButton() : ''}
        <p>{`$ ${data.price}`}</p>
      </div>
      <h1>About the device: </h1>
      <p>{data.description}</p>
    </div>
  );
}

export default DeviceDetails;
