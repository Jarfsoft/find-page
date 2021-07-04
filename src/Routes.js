import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Containers/Home';
import Navbar from './Components/Navbar';
import Getin from './Containers/Getin';
import DeviceDetails from './Containers/DeviceDetails';
import Favorites from './Containers/Favorites';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/start" exact component={Getin} />
      <Route path="/device/:id"><DeviceDetails /></Route>
      <Route path="/favorites" exact component={Favorites} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
