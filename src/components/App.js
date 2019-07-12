import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { MainPage } from './pages/mainPage/MainPage';
import { ChartsPage } from './pages/chartsPage/ChartsPage';
import { Icon } from './common/Icon';
import {
  getCoinsCurrentPrice,
  setCoinsSubstractPrice
} from '../actions/walletActions';
import { selectCoin } from '../actions/chartsActions';
import ring from '../assets/ring.svg';
import back from '../assets/back.svg';
import search from '../assets/search.svg';
import '../styles/App.scss';
import '../styles/reset.scss';
import 'crypto-icons/styles.css';
import 'crypto-icons/font.css';


export class App extends Component {
  componentDidMount() {
    this.init();
  }

  init() {
    const { wallet, interval } = this.props;
    const coins = wallet.coins.map(coin => coin.name);
    this.props.getCoinsPrice(coins);
    this.props.setSubstractPrice(coins, 'USD', interval);
  }
  render() {
    return (
      <div className='app'>
        {this.navBar()}
        <Route exact path='/' component={MainPage} />
        <Route exact path='/crypto-chart' component={ChartsPage} />
      </div>
    );
  }

  navBar() {
    // имитация панели навигаци и уведомлений
    const location = this.props.location.pathname;
    return (
      <div className='nav-bar'>
        {location === '/' ?
        <>
        <Icon path={search} />
        <Icon path={ring} />
        </>  :
        <Link to='/' className='back-link'><Icon path={back} /></Link>
      }
      </div>
    )
  }
}

const mapStateToProps = ({ wallet, interval }) => {
  return {
    wallet,
    interval
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoinsPrice: (coins, currency) =>
      dispatch(getCoinsCurrentPrice(coins, currency)),
    changeSelectedCoin: (coin) => dispatch(selectCoin(coin)),
    setSubstractPrice: (coins, currency, interval) =>
      dispatch(setCoinsSubstractPrice(coins, currency, interval))

  };
};
App = withRouter(App);
App = connect(mapStateToProps, mapDispatchToProps)(App);