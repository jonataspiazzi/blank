import { combineReducers } from 'redux';
import UsersReducer from './users';
import UserActiveReducer from './user-active';

const allReducers = combineReducers({
  users: UsersReducer,
  userActive: UserActiveReducer
});

export default allReducers;
