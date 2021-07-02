import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../Actions/index';
import './Navbar.css';

function Navbar() {
  const dispatch = useDispatch()
  const header = useSelector((state) => state.navbar.page);
  const user = useSelector((state) => state.navbar.user);
  const signout = () => {
    dispatch(actions.user(0));
  };
  const rightButton = () => {
    if(header === 'Devices')
      return (user !== 0 ? <a onClick={signout}>Sign out</a> : <Link to={'/start'}>Get in</Link>);
    else
      return (<Link to={'/'}>Home</Link>);
  }

  return (
    <nav>
      <Link to={'/favorites'}>Favorites</Link>
      <h1>{header ? header : ''}</h1>
      {rightButton()}
    </nav>
  );
}

export default Navbar;
