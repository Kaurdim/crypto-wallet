import React from 'react';

import { DEFAULT_PREDEFINED_INTERVALS } from '../../../constants'
import '../../../styles/IntervalButtons.scss';


export const IntervalButtons = ({ selcectedInterval, selectInterval }) => {

  const isActive = (name) => (name === selcectedInterval.name);
  return (
    <div className='interval-buttons'>
      {DEFAULT_PREDEFINED_INTERVALS.map(i => (
        <span
          onClick={() => { selectInterval(i) }}
          className={'interval-button ' + (isActive(i.name) ? 'active' : '')}
          key={i.name}>{i.text}
        </span>
      ))}
    </div>
  );
};
