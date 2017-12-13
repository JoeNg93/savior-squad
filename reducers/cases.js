import { GET_ALL_CASES_SUCCESS, SET_SELECTED_CASE_ID } from '../actions/cases';

const INITIAL_STATE = {
  allCases: {},
  selectedCaseId: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_ALL_CASES_SUCCESS:
      return {
        ...state,
        allCases: payload
      };
    case SET_SELECTED_CASE_ID:
      return { ...state, selectedCaseId: payload };
    default:
      return state;
  }
};
