import { FETCH_FINISH_ERROR, FETCH_FINISH_SUCCESS } from '../constants';

const isFetchError = false;

export function fetchStatusReduser(state = isFetchError, { type }) {
  switch (type) {
    case FETCH_FINISH_ERROR:
      return true;
    case FETCH_FINISH_SUCCESS:
      return false;
    default:
      return state;
  }
};
