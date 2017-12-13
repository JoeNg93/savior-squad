import { GET_EVENTS_SUCCESS, SET_SELECTED_EVENT_ID } from '../actions/events';

const INITIAL_STATE = {
  allEvents: {},
  selectedEventId: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        allEvents: payload
      };
    case SET_SELECTED_EVENT_ID:
      return { ...state, selectedEventId: payload };
    default:
      return state;
  }
};
