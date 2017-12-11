import { GET_EVENTS_SUCCESS } from '../actions/events';

const INITIAL_STATE = {
  allEvents: {}
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        allEvents: payload
      };
    default:
      return state;
  }
};
