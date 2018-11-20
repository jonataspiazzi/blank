import { combineReducers } from 'redux';
import UsersReducer from './users';
import UserSelectedReducer from './user-selected';

const allReducers = combineReducers({
  users: UsersReducer,
  userSelected: UserSelectedReducer
});

export default allReducers;
