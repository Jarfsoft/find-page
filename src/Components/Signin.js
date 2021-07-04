import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { getUser } from '../userApi';
import actions from '../Actions';
import { getFavorites } from '../favoriteAPI';
import './Signin.css';

function Signin() {
  const [name, setName] = useState();
  const user = useSelector((state) => state.users.userId);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const setUser = (n) => {
    if (n === undefined) setErrors(['User not found']);
    else dispatch(actions.login(n));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    getUser(name, setUser);
  };
  const history = useHistory();

  const setFavorites = (f) => {
    dispatch(actions.favorites(f));
  };

  useEffect(() => {
    if (user !== 0) {
      history.push('/');
      getFavorites(setFavorites);
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
      <br />
      {errors ? errors.map((e) => (
        <>
          <p>{e}</p>
          <br />
        </>
      )) : ''}
    </form>
  );
}

export default Signin;
