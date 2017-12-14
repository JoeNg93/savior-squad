import firebase from 'firebase';
import _ from 'lodash';

export const GET_EVENTS_PENDING = 'GET_EVENTS_PENDING';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAIL = 'GET_EVENTS_FAIL';

export const JOIN_EVENT_PENDING = 'JOIN_EVENT_PENDING';
export const JOIN_EVENT_SUCCESS = 'JOIN_EVENT_SUCCESS';
export const JOIN_EVENT_FAIL = 'JOIN_EVENT_FAIL';

export const LEAVE_EVENT_PENDING = 'LEAVE_EVENT_PENDING';
export const LEAVE_EVENT_SUCCESS = 'LEAVE_EVENT_SUCCESS';
export const LEAVE_EVENT_FAIL = 'LEAVE_EVENT_FAIL';

export const SET_SELECTED_EVENT_ID = 'SET_SELECTED_EVENT_ID';

export const SAVE_EVENT_PENDING = 'SAVE_EVENT_PENDING';
export const SAVE_EVENT_SUCCESS = 'SAVE_EVENT_SUCCESS';
export const SAVE_EVENT_FAIL = 'SAVE_EVENT_FAIL';

export const UNSAVE_EVENT_PENDING = 'UNSAVE_EVENT_PENDING';
export const UNSAVE_EVENT_SUCCESS = 'UNSAVE_EVENT_SUCCESS';
export const UNSAVE_EVENT_FAIL = 'UNSAVE_EVENT_FAIL';

export const getAllEvents = () => async dispatch => {
  dispatch({ type: GET_EVENTS_PENDING });
  firebase
    .database()
    .ref('/events')
    .on('value', snapshot => {
      dispatch({ type: GET_EVENTS_SUCCESS, payload: snapshot.val() });
    });
};

export const joinEvent = eventId => async (dispatch, getState) => {
  dispatch({ type: JOIN_EVENT_PENDING });
  const state = getState();
  const { currentUser } = state.auth;
  try {
    await firebase
      .database()
      .ref(`/events/${eventId}/participants/${currentUser.uid}`)
      .set(_.omit(currentUser, 'location'));
    dispatch({ type: JOIN_EVENT_SUCCESS });
    return { status: 'success' };
  } catch (err) {
    dispatch({ type: JOIN_EVENT_FAIL });
    return { status: 'fail' };
  }
};

export const leaveEvent = eventId => async (dispatch, getState) => {
  dispatch({ type: LEAVE_EVENT_PENDING });
  const state = getState();
  const { currentUser } = state.auth;
  try {
    await firebase
      .database()
      .ref(`/events/${eventId}/participants/${currentUser.uid}`)
      .set(null);
    dispatch({ type: LEAVE_EVENT_SUCCESS });
    return { status: 'success' };
  } catch (err) {
    dispatch({ type: LEAVE_EVENT_FAIL });
    return { status: 'fail' };
  }
};

export const setSelectedEventId = eventId => ({
  type: SET_SELECTED_EVENT_ID,
  payload: eventId
});

export const saveEvent = eventId => async (dispatch, getState) => {
  dispatch({ type: SAVE_EVENT_PENDING });
  const state = getState();
  const { allEvents } = state.events;
  const { currentUser } = state.auth;
  try {
    await firebase
      .database()
      .ref(`/users/${currentUser.uid}/events/${eventId}`)
      .set(allEvents[eventId]);
    dispatch({ type: SAVE_EVENT_SUCCESS });
    return { status: 'success' };
  } catch (err) {
    dispatch({ type: SAVE_EVENT_FAIL });
    return { status: 'fail' };
  }
};

export const unsaveEvent = eventId => async (dispatch, getState) => {
  dispatch({ type: UNSAVE_EVENT_PENDING });
  const state = getState();
  const { currentUser } = state.auth;
  try {
    await firebase.database().ref(`/users/${currentUser.uid}/events/${eventId}`).set(null);
    dispatch({ type: UNSAVE_EVENT_SUCCESS });
    return { status: 'success' };
  } catch (err) {
    dispatch({ type: UNSAVE_EVENT_FAIL });
    return { success: 'fail' };
  }
};
