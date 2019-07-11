import React from 'react';
import { SmallTile } from '../../common/SmallTile';
import '../../../styles/CoinsPanel.scss';


export const CoinsPanel = ({ coins }) => {
  return (
    <div className='coins-panel'>
    {coins.map(coin => (
      <SmallTile className='size-m' coin={coin} key={coin.name}/>
    ))}
  </div>
  );
};