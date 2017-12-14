import firebase from 'firebase';

export const GET_ALL_CASES_PENDING = 'GET_ALL_CASES_PENDING';
export const GET_ALL_CASES_SUCCESS = 'GET_ALL_CASES_SUCCESS';
export const GET_ALL_CASES_FAIL = 'GET_ALL_CASES_FAIL';

export const SET_SELECTED_CASE_ID = 'SET_SELECTED_CASE_ID';

export const SAVE_CASE_PENDING = 'SAVE_CASE_PENDING';
export const SAVE_CASE_SUCCESS = 'SAVE_CASE_SUCCESS';
export const SAVE_CASE_FAIL = 'SAVE_CASE_FAIL';

export const UNSAVE_CASE_PENDING = 'UNSAVE_CASE_PENDING';
export const UNSAVE_CASE_SUCCESS = 'UNSAVE_CASE_SUCCESS';
export const UNSAVE_CASE_FAIL = 'UNSAVE_CASE_FAIL';

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

export const saveCase = caseId => async (dispatch, getState) => {
  dispatch({ type: SAVE_CASE_PENDING });
  const state = getState();
  const { allCases } = state.cases;
  const { currentUser } = state.auth;
  try {
    await firebase
      .database()
      .ref(`/users/${currentUser.uid}/cases/${caseId}`)
      .set(allCases[caseId]);
    dispatch({ type: SAVE_CASE_SUCCESS });
    return { status: 'success' };
  } catch (err) {
    dispatch({ type: SAVE_CASE_FAIL });
    return { status: 'fail' };
  }
};

export const unsaveCase = caseId => async (dispatch, getState) => {
  dispatch({ type: UNSAVE_CASE_PENDING });
  const state = getState();
  const { currentUser } = state.auth;
  try {
    await firebase
      .database()
      .ref(`/users/${currentUser.uid}/cases/${caseId}`)
      .set(null);
    dispatch({ type: UNSAVE_CASE_SUCCESS });
    return { status: 'success' };
  } catch (err) {
    dispatch({ type: UNSAVE_CASE_FAIL });
    return { status: 'fail' };
  }
};
