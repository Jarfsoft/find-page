import React from 'react';
import { useSelector /*, useDispatch */ } from 'react-redux';

// import actions from '../Actions/index';
import './Navbar.css';

function Navbar() {
  const header = useSelector((state) => state.navbar.page)
  return (
    <nav>
      <a href="">Favorites</a>
      <h1>{header}</h1>
      <a href="">Sign up</a>
    </nav>
  );
}

export default Navbar;
