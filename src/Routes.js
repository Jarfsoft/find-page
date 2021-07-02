import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Containers/Home';
import Navbar from './Components/Navbar';
import Getin from './Containers/Getin'

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/start" exact component={Getin} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
