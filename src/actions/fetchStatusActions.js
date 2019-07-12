import { FETCH_FINISH_ERROR, FETCH_FINISH_SUCCESS } from '../constants';


export function setFetchSuccess() {
  return {
    type: FETCH_FINISH_SUCCESS,
  };
};


export function setFetchError() {
  return {
    type: FETCH_FINISH_ERROR,
  };
};