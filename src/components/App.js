import React from 'react';
import { BrowserRouter , Route, Link } from 'react-router-dom';
import { MainPage } from './pages/mainPage/MainPage';
import { ChartsPage } from './pages/chartsPage/ChartsPage';
import '../styles/App.scss';
import '../styles/reset.scss';
import 'crypto-icons/styles.css';
import 'crypto-icons/font.css';



export const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/crypto-chart' component={ChartsPage} />
      </div>
    </BrowserRouter>
  );
};