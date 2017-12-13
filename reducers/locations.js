import {
  GET_USER_LOCATION_FOR_TRACKING_SUCCESS,
  STOP_LOCATION_TRACKING_SUCCESS
} from '../actions/locations';

const INITIAL_STATE = {
  locationListenerRef: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_USER_LOCATION_FOR_TRACKING_SUCCESS:
      return { ...state, locationListenerRef: payload };
    case STOP_LOCATION_TRACKING_SUCCESS:
      return { ...state, locationListenerRef: null };
    default:
      return state;
  }
};
