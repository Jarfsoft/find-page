import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import Signin from '../Components/Signin';
import Signup from '../Components/Signup';
import actions from '../Actions';
import './Getin.css';

function Getin() {
  const dispatch = useDispatch();
  dispatch(actions.page('Get in'));
  const [signin, setSignin] = useState(true);
  const clickHandler = (e) => {
    e.preventDefault();
    setSignin(!signin);
  };
  const renderButton = (text) => (<a href="/" type="button" onClick={clickHandler}>{text}</a>);
  return (
    <>
      {signin ? <Signin /> : <Signup />}
      <div className="buttons-top">
        {signin ? renderButton('Sign up') : renderButton('Sign in')}
      </div>
    </>
  );
}

export default Getin;
