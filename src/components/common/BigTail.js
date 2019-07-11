import React from 'react';
import { TextTile } from './TextTile';
import '../../styles/BigTail.scss';


export const BigTail = ({ coin }) => {
  return (
    <div className='big-tail'>
      <div className='coin-info tail-row'>
        <TextTile mainText={coin.name} align='left'/> 
        <TextTile mainText={coin.amount} subText={'$' + (coin.amount * coin.currentPrice).toFixed(2)} />
      </div>
      <div className='coin-price tail-row'>
        <TextTile mainText={coin.currentPrice} subText='Price' align='left'/>
        <TextTile subText='Profit/Less'/>
      </div>
    </div>
  )
}