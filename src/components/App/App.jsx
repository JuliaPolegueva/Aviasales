import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AirTicketsList from '../AirTicketsList';
import TransferFilter from '../TransferFilter';
import logo from '../../assets/images/Logo.svg';
import { fetchSearchId, fetchTickets } from '../../store/tickets/tickets.actions';

import './App.scss';

const App = () => {
  const searchId = useSelector(state => state.tickets.searchId);
  const stop = useSelector(state => state.tickets.stop);
  const statusFetch500 = useSelector(state => state.tickets.statusFetch500);
  const tickets = useSelector(state => state.tickets.tickets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchId());
  }, []);

  useEffect(() => {
    if (!stop && searchId) dispatch(fetchTickets(searchId));
  }, [dispatch, searchId, stop, tickets, statusFetch500]);

  return (
    <div className="avia-app">
      <header className="header">
        <img className="avia-app__img" src={logo} alt="Логотип самолета" />
      </header>
      <main className="main">
        <TransferFilter />
        <AirTicketsList />
      </main>
    </div>
  );
};

export default App;
