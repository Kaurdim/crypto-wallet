import { SET_INTERVAL } from '../constants';


export function setInterval(interval) {
  return {
    payload: {
      interval
    },
    type: SET_INTERVAL,
  };
}