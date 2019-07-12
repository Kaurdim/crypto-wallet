import React from 'react';
import classNames from 'classnames';

import { TextTile } from './TextTile';
import { calculateProfit, prepareProfitValue } from '../../utils';
import '../../styles/SmallTile.scss';


export const SmallTile = ({ coin = {}, className, onClick }) => {
  const classes = classNames('small-tile', className);
  const profit = calculateProfit(coin.amount, coin.price, coin.currentPrice);
  return (
    <div className={classes} onClick={onClick}>
      <TextTile 
        mainText={coin.name} 
        align='left' 
        subText={coin.textName} 
        icon={coin.name}/> 
      <TextTile subText={prepareProfitValue(profit, '%')} mainText={coin.amount}
        className={profit === 0 ? '' : profit > 0 ? 'profit-sub' : 'loss-sub'}/>
    </div>
  );
};