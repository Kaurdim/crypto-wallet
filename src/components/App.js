import React from 'react';
import { BrowserRouter , Route, Link } from 'react-router-dom';
import { MainPage } from './pages/mainPage/MainPage';
import { CrypoCharts } from './pages/CryptoCharts';
import '../styles/App.scss';
import '../styles/reset.scss';




export const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Link to='/'>Первый</Link>
        <Link to='/crypto-chart'>Второй</Link>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/crypto-chart' component={CrypoCharts} />
      </div>
    </BrowserRouter>
  );
};