import { Location } from 'expo';
import firebase from 'firebase';

export const GET_CURRENT_LOCATION_PENDING = 'GET_CURRENT_LOCATION_PENDING';
export const GET_CURRENT_LOCATION_SUCCESS = 'GET_CURRENT_LOCATION_SUCCESS';
export const GET_CURRENT_LOCATION_FAIL = 'GET_CURRENT_LOCATION_FAIL';

export const GET_USER_LOCATION_FOR_TRACKING_PENDING =
  'GET_USER_LOCATION_FOR_TRACKING_PENDING';
export const GET_USER_LOCATION_FOR_TRACKING_SUCCESS =
  'GET_USER_LOCATION_FOR_TRACKING_SUCCESS';
export const GET_USER_LOCATION_FOR_TRACKING_FAIL =
  'GET_USER_LOCATION_FOR_TRACKING_FAIL';

export const getCurrentLocation = () => async dispatch => {
  dispatch({ type: GET_CURRENT_LOCATION_PENDING });
  try {
    const {
      coords: { longitude, latitude }
    } = await Location.getCurrentPositionAsync();
    dispatch({
      type: GET_CURRENT_LOCATION_SUCCESS,
      payload: { longitude, latitude }
    });
    return { status: 'success' };
  } catch (err) {
    return { status: 'fail' };
  }
};

export const listenToLocationChange = () => async dispatch => {};
