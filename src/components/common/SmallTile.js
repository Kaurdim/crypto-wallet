import React from 'react';
import classNames from 'classnames';

import { TextTile } from './TextTile';
import { calculateProfit } from '../../utils';
import '../../styles/SmallTile.scss';

export const SmallTile = ({coin = {}, className}) => {
  // вынести в reduser calculateProfit
  const classes = classNames('small-tile', className);
  return (
    <div className={classes}>
      <TextTile 
        mainText={coin.name} 
        align='left' 
        subText={coin.textName} 
        icon={coin.name}/> 
      <TextTile subText='Profit/Loss' mainText={calculateProfit() + ' %'} 
        className={calculateProfit() === 0 ? '' : calculateProfit() > 0 ? 'profit' : 'loss'}/>
    </div>
  )
}