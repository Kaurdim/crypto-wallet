import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectCoin } from '../../../actions/chartsActions';
import { CoinsList } from './CoinsList';
import { BalanceDisplay } from './BalanceDisplay';
import '../../../styles/MainPage.scss';
import '../../../styles/common.scss';


export class MainPage extends Component {
  render() {
    const { wallet, changeSelectedCoin, interval, isFetchError } = this.props;

    const walletCurrentSum = wallet.coins.reduce((sum, coin) => {
      return sum + (coin.amount * coin.currentPrice);
    }, 0);
    const walletSubstractSum = wallet.coins.reduce((sum, coin) => {
      return sum + (coin.amount * coin.price);
    }, 0);
    const walletProfit = walletCurrentSum - walletSubstractSum;
    return (
      <div className='main-page'>
        <BalanceDisplay 
          timeChange={interval.changes}
          walletCurrentSum={walletCurrentSum}
          walletProfit={walletProfit}
          requestError={isFetchError}
          />
        <CoinsList coins={wallet.coins} changeCoin={changeSelectedCoin}/>
      </div>
    );
  }
};

const mapStateToProps = ({ wallet, interval, isFetchError }) => {
  return {
    wallet,
    interval,
    isFetchError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedCoin: (coin) => dispatch(selectCoin(coin))
  };
};

MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);