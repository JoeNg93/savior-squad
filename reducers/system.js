import { SET_CURRENT_DATA_GRID_VIEW } from '../actions/system';

const INITIAL_STATE = {
  currentDataForGridView: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_DATA_GRID_VIEW:
      return { ...state, currentDataForGridView: payload };
    default:
      return state;
  }
};
