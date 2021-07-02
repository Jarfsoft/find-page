import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../Actions';

import './Home.css';

function Home() {
  const dispatch = useDispatch();
  dispatch(actions.page('Devices'));

  return (
    <div className="App">
      Hello, world!
    </div>
  );
}

export default Home;
