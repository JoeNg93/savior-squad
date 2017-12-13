import firebase from 'firebase';

export const SAVE_USER_PENDING = 'SAVE_USER_PENDING';
export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';
export const SAVE_USER_FAIL = 'SAVE_USER_FAIL';

export const GET_USER_PENDING = 'GET_USER_PENDING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const saveUser = ({
  userUID,
  name,
  telephoneNumber
}) => async dispatch => {
  dispatch({ type: SAVE_USER_PENDING });
  try {
    await firebase
      .database()
      .ref(`/users/${userUID}`)
      .set({ name, telephoneNumber });
    dispatch({ type: SAVE_USER_SUCCESS, payload: { name, telephoneNumber } });
    return { status: 'success' };
  } catch (err) {
    dispatch({ type: SAVE_USER_FAIL });
    return { status: 'fail' };
  }
};

// TODO: May consider using on(..)
export const getUser = ({ userUID }) => dispatch => {
  dispatch({ type: GET_USER_PENDING });
  firebase
    .database()
    .ref(`/users/${userUID}`)
    .on('value', snapshot =>
      dispatch({ type: GET_USER_SUCCESS, payload: snapshot.val() })
    );
};
