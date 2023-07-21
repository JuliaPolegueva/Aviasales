import React from 'react';

import AirTicketsFilter from '../AirTicketsFilter';
import AirTicket from '../AirTicket/AirTicket';

import classes from './AirTicketsList.module.scss';

function AirTicketsList(props) {
  return (
    <div className={classes.tikets}>
      <AirTicketsFilter />
      <AirTicket />
      <AirTicket />
      <AirTicket />
      <AirTicket />
      <AirTicket />
      <button className={classes['show-more']}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
    </div>
  );
}

export default AirTicketsList;
