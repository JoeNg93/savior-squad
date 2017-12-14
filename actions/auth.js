import firebase from 'firebase';
import { AsyncStorage } from 'react-native';
import { saveUser, getUser } from './users';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT_PENDING = 'LOGOUT_PENDING';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const SIGNUP_PENDING = 'SIGNUP_PENDING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const checkCredential = () => async dispatch => {
  let credential = await AsyncStorage.getItem('loginCredential');
  if (credential) {
    try {
      const { email, password } = JSON.parse(credential);
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      dispatch({ type: LOGIN_SUCCESS, payload: user });
      return { status: 'success' };
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: 'Token is expired. Please login again'
      });
      return { status: 'fail' };
    }
  }
};

export const createAndSaveCredential = ({ email, password }) => {
  return AsyncStorage.setItem(
    'loginCredential',
    JSON.stringify({ email, password })
  );
};

export const login = ({ email, password }) => async dispatch => {
  dispatch({ type: LOGIN_PENDING });
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    await createAndSaveCredential({ email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: user });
    getUser({ userUID: user.uid })(dispatch);
    return { status: 'success' };
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: 'Username or password is incorrect'
    });
    return { status: 'fail' };
  }
};

export const logout = () => async dispatch => {
  dispatch({ type: LOGOUT_PENDING });
  try {
    await firebase.auth().signOut();
    await AsyncStorage.removeItem('loginCredential');
    dispatch({ type: LOGOUT_SUCCESS });
    return { status: 'success' };
  } catch (err) {
    dispatch({ type: LOGOUT_FAIL });
    return { status: 'fail' };
  }
};

export const signUp = ({
  email,
  password,
  name,
  telephoneNumber
}) => async dispatch => {
  dispatch({ type: SIGNUP_PENDING });
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await createAndSaveCredential({ email, password });
    await saveUser({ userUID: user.uid, name, telephoneNumber })(dispatch);
    dispatch({ type: SIGNUP_SUCCESS, payload: user });
    return { status: 'success' };
  } catch (err) {
    dispatch({ type: SIGNUP_FAIL });
    return { status: 'fail' };
  }
};
