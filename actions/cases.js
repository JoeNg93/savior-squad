import firebase from 'firebase';

export const GET_ALL_CASES_PENDING = 'GET_ALL_CASES_PENDING';
export const GET_ALL_CASES_SUCCESS = 'GET_ALL_CASES_SUCCESS';
export const GET_ALL_CASES_FAIL = 'GET_ALL_CASES_FAIL';

export const SET_SELECTED_CASE_ID = 'SET_SELECTED_CASE_ID';
export const getAllCases = () => dispatch => {
  dispatch({ type: GET_ALL_CASES_PENDING });
  firebase
    .database()
    .ref('/cases')
    .on('value', snapshot => {
      dispatch({ type: GET_ALL_CASES_SUCCESS, payload: snapshot.val() });
    });
};

export const setSelectedCaseId = caseId => ({
  type: SET_SELECTED_CASE_ID,
  payload: caseId
});
