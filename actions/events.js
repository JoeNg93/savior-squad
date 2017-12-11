import firebase from 'firebase';

export const GET_EVENTS_PENDING = 'GET_EVENTS_PENDING';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAIL = 'GET_EVENTS_FAIL';

export const JOIN_EVENT_PENDING = 'JOIN_EVENT_PENDING';
export const JOIN_EVENT_SUCCESS = 'JOIN_EVENT_SUCCESS';
export const JOIN_EVENT_FAIL = 'JOIN_EVENT_FAIL';

export const LEAVE_EVENT_PENDING = 'LEAVE_EVENT_PENDING';
export const LEAVE_EVENT_SUCCESS = 'LEAVE_EVENT_SUCCESS';
export const LEAVE_EVENT_FAIL = 'LEAVE_EVENT_FAIL';

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
      .set(currentUser);
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
      .remove();
    dispatch({ type: LEAVE_EVENT_SUCCESS });
    return { status: 'success' };
  } catch (err) {
    dispatch({ type: LEAVE_EVENT_FAIL });
    return { status: 'fail' };
  }
};
