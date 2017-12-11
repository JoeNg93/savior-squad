import { GET_ALL_CASES_SUCCESS } from '../actions/cases';

const INITIAL_STATE = {
  allCases: {}
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_ALL_CASES_SUCCESS:
      return {
        ...state,
        allCases: payload
      };
    default:
      return state;
  }
};
