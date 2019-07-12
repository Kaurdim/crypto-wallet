import { DEFAULT_PREDEFINED_INTERVALS, SET_INTERVAL } from '../constants';

const interval = DEFAULT_PREDEFINED_INTERVALS[0];

export function intervalReduser(state = interval, { type, payload }) {
  switch (type) {
    case SET_INTERVAL:
      return payload.interval;
    default:
      return state;
  }
};


