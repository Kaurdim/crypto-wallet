import React  from 'react';
import { Icon } from './Icon';
import '../../styles/TextTile.scss';

export const TextTile = ({ mainText = 0.234, subText = 'sdds', className, profit, icon, align}) => {
  return (
    <div className={'text-tail-container' + (className || '')}>
      {icon && 
      <div className='tail-icon'>
        <Icon/>
      </div>}
      <div className='tail-text' style={{textAlign: align}}>
      <span className='main-text'>{mainText || <span className='fake-text'></span>}</span>
        <span className='sub-text'>{subText || <span className='fake-text'></span>}</span>
      </div>
    </div>
  )
}