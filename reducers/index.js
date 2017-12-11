import { combineReducers } from 'redux';
import authReducer from './auth';
import casesReducer from './cases';
import eventsReducer from './events';

export default combineReducers({
  auth: authReducer,
  cases: casesReducer,
  events: eventsReducer
});
