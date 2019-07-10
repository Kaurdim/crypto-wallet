import React from 'react';
import { TextTile } from './TextTile';
import '../../styles/BigTail.scss';


export const BigTail = () => {
  return (
    <div className='big-tail'>
      <div className='coin-info'>
        <TextTile/> 
        <TextTile/>
      </div>
      <div className='coin-price'>
        <TextTile/>
        <TextTile/>
      </div>
    </div>
  )
}