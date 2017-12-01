import { combineReducers } from 'redux';

export default combineReducers({
  user: () => ({ name: 'Joe', age: 20 })
});