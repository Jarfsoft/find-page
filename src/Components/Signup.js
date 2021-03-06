import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { postUser } from '../userApi';
import actions from '../Actions';
import './Signup.css';

function Signup() {
  const [name, setName] = useState();
  const user = useSelector((state) => state.users.userId);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const setUser = (n) => {
    if (n.status === 'ERROR') setErrors([...n.data.name]);
    else dispatch(actions.login({ id: n.data.id, name: n.data.name }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    postUser(name, setUser);
  };
  const history = useHistory();

  useEffect(() => {
    if (user > 0) {
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
      <input className="submit-btn" type="submit" value="Sign up" />
      <br />
      {user === -1 && <div className="loading" />}
      {errors ? errors.map((e) => (
        <>
          <p>{e}</p>
          <br />
        </>
      )) : ''}
    </form>
  );
}

export default Signup;
