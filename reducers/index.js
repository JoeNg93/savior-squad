import { combineReducers } from 'redux';
import authReducer from './auth';
import casesReducer from './cases';
import eventsReducer from './events';
import locationsReducer from './locations';
import systemReducer from './system';

export default combineReducers({
  auth: authReducer,
  cases: casesReducer,
  events: eventsReducer,
  locations: locationsReducer,
  system: systemReducer
});
