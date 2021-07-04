import { combineReducers } from 'redux';
import navbar from './navbar';
import users from './users';
import devices from './devices';

const rootReducer = combineReducers({
  navbar,
  users,
  devices,
});

export default rootReducer;
