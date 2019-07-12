import React  from 'react';
import classNames from 'classnames';

import '../../styles/TextTile.scss';


export const TextTile = ({ mainText, subText, className = '', icon, align}) => {
  const classes = classNames('text-tail-container', className);
  return (
    <div className={classes}>
      {icon && 
      <div className='tail-icon'>
        <span className={`icon icon-${icon.toLowerCase()}`}></span>        
      </div>}
      <div className='tail-text' style={{textAlign: align}}>
        <span className='main-text'>{mainText || <span className='fake-text'></span>}</span>
        <span className='sub-text'>{subText || <span className='fake-text'></span>}</span>
      </div>
    </div>
  );
}; 