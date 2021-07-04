import { combineReducers } from 'redux';
import navbar from './navbar';
import users from './users';
import devices from './devices';
import favorites from './favorites';

const rootReducer = combineReducers({
  navbar,
  users,
  devices,
  favorites,
});

export default rootReducer;
