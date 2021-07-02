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
  const clickHandler = () => {
    setSignin(!signin);
  }
  return (
    <>
      <div className="buttons-top">
        {signin ? <button onClick={clickHandler}>Sign up</button> : <button onClick={clickHandler}>Sign in</button>}
      </div>
      {signin ? <Signin /> : <Signup />}
    </>
  )
}

export default Getin
