import { GET_USER_SUCCESS, SAVE_USER_SUCCESS } from '../actions/users';
import { GET_CURRENT_LOCATION_SUCCESS } from '../actions/locations';
import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGIN_FAIL,
  LOGIN_PENDING,
  SIGNUP_PENDING,
  SIGNUP_FAIL
} from '../actions/auth';

const INITIAL_STATE = {
  currentUser: null,
  isLoggingIn: false
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN_PENDING:
    case SIGNUP_PENDING:
      return { ...state, isLoggingIn: true };

    case LOGIN_FAIL:
    case SIGNUP_FAIL:
      return { ...state, isLoggingIn: false };

    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS: {
      const { email, uid } = payload;
      return {
        ...state,
        currentUser: { ...state.currentUser, email, uid },
        isLoggingIn: false
      };
    }

    case GET_USER_SUCCESS:
    case SAVE_USER_SUCCESS: {
      return {
        ...state,
        currentUser: { ...state.currentUser, ...payload },
        isLoggingIn: false
      };
    }

    case GET_CURRENT_LOCATION_SUCCESS:
      return {
        ...state,
        currentUser: { ...state.currentUser, location: payload }
      };

    default:
      return state;
  }
};
