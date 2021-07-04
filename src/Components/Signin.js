import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { getUser } from '../userApi';
import actions from '../Actions';
import './Signin.css';

function Signin() {
  const [name, setName] = useState();
  const user = useSelector((state) => state.users.userId);
  const dispatch = useDispatch();
  const setUser = (n) => {
    dispatch(actions.login(n));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    getUser(name, setUser);
  };
  const history = useHistory();

  useEffect(() => {
    if (user !== 0) {
      history.push('/');
    }
  }, [user]);

  const changeHandler = (e) => {
    setName(e.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <h1>Name:</h1>
      <br />
      <input id="name" required type="text" name="name" value={name} onChange={changeHandler} />
      <br />
      <input className="submit-btn" type="submit" value="Sign in" />
    </form>
  );
}

export default Signin;
