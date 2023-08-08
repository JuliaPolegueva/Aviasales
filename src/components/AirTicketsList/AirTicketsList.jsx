import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AirTicketsFilter from '../AirTicketsFilter';
import AirTicket from '../AirTicket/AirTicket';
import { getMoreTickets } from '../../store/tickets/tickets.slice';
import Spinner from '../Spinner';
import { filterByTransfer } from '../../utils/filterByTransfer';
import ErrorMessage from '../ErrorMessage';
import NotFound from '../NotFound/NotFound';

import classes from './AirTicketsList.module.scss';

function AirTicketsList() {
  const ticketsList = useSelector(state => state.tickets.tickets);
  const renderedTickets = useSelector(state => state.tickets.renderedTickets);

  const transferFilters = useSelector(state => state.transfer);
  const filterAll = useSelector(state => state.transfer.all);

  const isLoading = useSelector(state => state.tickets.isLoading);
  const isError = useSelector(state => state.tickets.isError);

  const dispatch = useDispatch();

  const renderTickets = arr => {
    return arr.slice(0, renderedTickets).map((ticket, ind) => {
      return <AirTicket key={ind} {...ticket} />;
    });
  };

  const filterTickets = ticketsList.filter(item => filterByTransfer(item, transferFilters, filterAll));

  const tickets = filterTickets && !isError ? renderTickets(filterTickets) : null;
  const spinner = isLoading ? <Spinner /> : null;
  const error = isError ? <ErrorMessage /> : null;

  return (
    <div className={classes.tikets}>
      <AirTicketsFilter />
      {spinner}
      {error}
      {tickets}
      {filterTickets.length === 0 && !(isLoading || isError) && <NotFound />}
      {filterTickets.length > renderedTickets && (
        <button className={classes['show-more']} onClick={() => dispatch(getMoreTickets())}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      )}
    </div>
  );
}

export default AirTicketsList;
