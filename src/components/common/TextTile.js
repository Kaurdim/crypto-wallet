import React  from 'react';
import '../../styles/TextTile.scss';

export const TextTile = ({mainText, subText, className, proit}) => {
  return (
    <div className={'text-tail-container' + (className || '')}>
      <span className='main-text'>434343</span>
      <span className='sub-text'>3434</span>
    </div>
  )
}