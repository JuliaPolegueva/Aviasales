import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import { sortTicketsByPrice, sortTicketsBySpeed, sortTicketsOptimal } from '../../store/tickets/tickets.slice';

import classes from './AirTicketsFilter.module.scss';

function AirTicketsFilter() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ price: false, speed: false, optimal: false });

  const cx = classNames.bind(classes);

  const changeFilter = sortMethod => {
    dispatch(sortMethod());
  };

  return (
    <div className={classes.filter}>
      <button
        className={cx('filter__btn', { pressed: filter.price })}
        type="button"
        onClick={() => {
          changeFilter(sortTicketsByPrice);
          setFilter({ price: true, speed: false, optimal: false });
        }}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={cx('filter__btn', { pressed: filter.speed })}
        type="button"
        onClick={() => {
          changeFilter(sortTicketsBySpeed);
          setFilter({ price: false, speed: true, optimal: false });
        }}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={cx('filter__btn', { pressed: filter.optimal })}
        type="button"
        onClick={() => {
          changeFilter(sortTicketsOptimal);
          setFilter({ price: false, speed: false, optimal: true });
        }}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}

export default AirTicketsFilter;
