import { Location } from 'expo';
import firebase from 'firebase';
import randomColor from 'randomcolor';

export const GET_CURRENT_LOCATION_PENDING = 'GET_CURRENT_LOCATION_PENDING';
export const GET_CURRENT_LOCATION_SUCCESS = 'GET_CURRENT_LOCATION_SUCCESS';
export const GET_CURRENT_LOCATION_FAIL = 'GET_CURRENT_LOCATION_FAIL';

export const GET_USER_LOCATION_FOR_TRACKING_PENDING =
  'GET_USER_LOCATION_FOR_TRACKING_PENDING';
export const GET_USER_LOCATION_FOR_TRACKING_SUCCESS =
  'GET_USER_LOCATION_FOR_TRACKING_SUCCESS';
export const GET_USER_LOCATION_FOR_TRACKING_FAIL =
  'GET_USER_LOCATION_FOR_TRACKING_FAIL';

export const STOP_LOCATION_TRACKING_PENDING = 'STOP_LOCATION_TRACKING_PENDING';
export const STOP_LOCATION_TRACKING_SUCCESS = 'STOP_LOCATION_TRACKING_SUCCESS';
export const STOP_LOCATION_TRACKING_FAIL = 'STOP_LOCATION_TRACKING_FAIL';

export const UPDATE_CURRENT_LOCATION = 'UPDATE_CURRENT_LOCATION';

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

export const listenToLocationChange = eventId => async (dispatch, getState) => {
  dispatch({ type: GET_USER_LOCATION_FOR_TRACKING_PENDING });
  const state = getState();
  const { currentUser } = state.auth;
  const userId = currentUser.uid;
  await firebase
    .database()
    .ref(`/events/${eventId}/participants/${userId}`)
    .update({ markerColor: randomColor() });
  const locationListenerRef = await Location.watchPositionAsync(
    { enableHighAccuracy: true, distanceInterval: 2 },
    async ({ coords }) => {
      const { latitude, longitude } = coords;
      dispatch({
        type: UPDATE_CURRENT_LOCATION,
        payload: { latitude, longitude }
      });

      await firebase
        .database()
        .ref(`/events/${eventId}/participants/${userId}/location`)
        .set({ latitude, longitude });

      await firebase
        .database()
        .ref(`/events/${eventId}/participants/${userId}/trackingLocs`)
        .push({ latitude, longitude });
    }
  );
  dispatch({
    type: GET_USER_LOCATION_FOR_TRACKING_SUCCESS,
    payload: locationListenerRef
  });
};

export const stopListeningToLocationChange = eventId => async (
  dispatch,
  getState
) => {
  dispatch({ type: STOP_LOCATION_TRACKING_PENDING });
  const state = getState();
  const { currentUser } = state.auth;
  const userId = currentUser.uid;
  const currentEvent = state.events.allEvents[eventId];
  const { locationListenerRef } = state.locations;
  if (locationListenerRef) {
    locationListenerRef.remove();

    await firebase
      .database()
      .ref(`/events/${eventId}/participants/${userId}/trackingLocs`)
      .set(null);

    await firebase
      .database()
      .ref(`/events/${eventId}/participants/${userId}/location`)
      .set(null);
    dispatch({ type: STOP_LOCATION_TRACKING_SUCCESS });
    return { status: 'success' };
  } else {
    dispatch({ type: STOP_LOCATION_TRACKING_FAIL });
    return { status: 'fail' };
  }
};
