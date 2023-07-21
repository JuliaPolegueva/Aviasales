import React from 'react';

import AirTicketsList from '../AirTicketsList';
import TransferFilter from '../TransferFilter';
import logo from '../../assets/images/Logo.svg';

import './App.scss';

function App() {
  return (
    <div className="avia-app">
      <img className="avia-app__img" src={logo} alt="Логотип самолета" />
      <div className="main">
        <TransferFilter />
        <AirTicketsList />
      </div>
    </div>
  );
}

export default App;
