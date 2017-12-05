import { GET_USER_SUCCESS, SAVE_USER_SUCCESS } from '../actions/users';
import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from '../actions/auth';

const INITIAL_STATE = {
  currentUser: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS: {
      const { email, uid } = payload;
      return { ...state, currentUser: { ...state.currentUser, email, uid } };
    }

    case GET_USER_SUCCESS:
    case SAVE_USER_SUCCESS: {
      console.log('Type: ', type);
      const { name, telephoneNumber } = payload;
      return {
        ...state,
        currentUser: { ...state.currentUser, name, telephoneNumber }
      };
    }

    default:
      return state;
  }
};
