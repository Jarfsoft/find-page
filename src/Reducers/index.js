import { combineReducers } from 'redux';
import navbar from './navbar';
import users from './users';

const rootReducer = combineReducers({
  navbar,
  users,
});

export default rootReducer;
