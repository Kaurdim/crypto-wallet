import React from 'react';

import { SmallTile } from '../../common/SmallTile';
import '../../../styles/WalletsPanel.scss';


export const WalletsPanel = ({ coins, selectedCoin, heandleClick }) => {
  const isActive = (name) => name === selectedCoin;
  return (
    <div className='wallets-panel'>
      {coins.map(coin => (
        <SmallTile 
          onClick={() => heandleClick(coin.name)}
          className={'size-m ' + (isActive(coin.name) ? 'active' : '')} 
          coin={coin} 
          key={coin.name}
        />
      ))}
    </div>
  );
};