import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../Actions/index';
import './Navbar.css';

function Navbar() {
  const dispatch = useDispatch();
  const header = useSelector((state) => state.navbar.page);
  const user = useSelector((state) => state.users.userId);
  const signout = () => {
    dispatch(actions.logout);
  };
  const rightButton = () => {
    if (header === 'Devices') return (user !== 0 ? <a href="/" onClick={signout}>Sign out</a> : <Link to="/start">Get in</Link>);
    return (<Link to="/">Home</Link>);
  };

  return (
    <nav>
      <Link to="/favorites">Favorites</Link>
      <h1>{header || ''}</h1>
      {rightButton()}
    </nav>
  );
}

export default Navbar;
