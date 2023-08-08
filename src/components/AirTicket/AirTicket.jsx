import React from 'react';
import PropTypes from 'prop-types';

import { travelTime, getDepartureTime, getArrivalTime } from '../../utils/dateFilter';
import { wordDeclension } from '../../utils/wordDeclension';

import classes from './AirTicket.module.scss';

const AirTicket = ({ price, carrier, segments }) => {
  const transferWordsArr = ['ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК'];
  const priceFormat = price.toLocaleString();

  return (
    <div className={classes.tiket}>
      <div className={classes.tiket__header}>
        <span className={classes.tiket__price}>{priceFormat} P</span>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="Логотип авиакомпании" />
      </div>

      {segments.map(item => {
        return (
          <div className={classes.tiket__info} key={item.date}>
            <div className={classes.data}>
              <span className={`${classes.data__text} ${classes['data__text-header']}`}>
                {item.origin} - {item.destination}
              </span>
              <span className={classes.data__text}>
                {getDepartureTime(item.date)} - {getArrivalTime(item.date, item.duration)}
              </span>
            </div>
            <div className={classes.data}>
              <span className={`${classes.data__text} ${classes['data__text-header']}`}>В ПУТИ </span>
              <span className={classes.data__text}>{travelTime(item.duration)}</span>
            </div>
            <div className={classes.data}>
              <span className={`${classes.data__text} ${classes['data__text-header']}`}>
                {`${item.stops.length > 0 ? item.stops.length : 'БЕЗ'} 
                ${wordDeclension(item.stops.length, transferWordsArr)}`}
              </span>
              <span className={classes.data__text}>{item.stops.join(', ')}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AirTicket;

AirTicket.defaultProps = {
  price: 0,
  carrier: '',
  segments: [],
};

AirTicket.propTypes = {
  price: PropTypes.number,
  carrier: PropTypes.string,
  segments: PropTypes.array,
};
