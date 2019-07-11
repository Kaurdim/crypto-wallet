import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCoinsCurrentPrice } from '../../../actions/walletActions';
import { CoinsList } from './CoinsList';
import { BalanceDisplay } from './BalanceDisplay';
import '../../../styles/MainPage.scss';
import '../../../styles/common.scss';


export class MainPage extends Component {

  componentDidMount() {
    const coins = this.props.wallet.coins.map(coin => coin.name);
    this.props.getCoinsPrice(coins);
  }

  render() {
    const { coins } = this.props.wallet;
    return (
      <div className='main-page'>
        <BalanceDisplay/>
        <CoinsList coins={coins}/>
      </div>
    )
  }
}

const mapStateToProps = ({ wallet }) => {
  return {
    wallet
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoinsPrice: (coins, currency) => dispatch(getCoinsCurrentPrice(coins, currency))
  };
};

MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);