import React from 'react';
import { Link } from 'react-router-dom';

import { BigTail } from '../../common/BigTail';
import '../../../styles/CoinList.scss';

export const CoinsList = ({ coins, changeCoin }) => {
  return (
    <div className='coins-list' >
      {coins.map(coin => (
        <Link to='/crypto-chart'  key={coin.name} style={{width: '100%', maxWidth: '350px'}}>
          <BigTail coin={coin} onClick={() => changeCoin(coin.name)}/>
        </Link>
      ))}
    </div>
  )
}