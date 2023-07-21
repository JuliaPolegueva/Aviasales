import React from 'react';

import S7Logo from '../../assets/images/S7Logo.svg';

import classes from './AirTicket.module.scss';

function AirTicket(props) {
  return (
    <div className={classes.tiket}>
      <div className={classes.tiket__header}>
        <span className={classes.tiket__price}>13 400 P</span>
        <img src={S7Logo} alt="Логотип авиакомпании" />
      </div>
      <div className={classes.tiket__info}>
        <div className={classes.data}>
          <span className={`${classes.data__text} ${classes['data__text-header']}`}>MOW - HKT </span>
          <span className={classes.data__text}>10:45 - 08:00</span>
        </div>
        <div className={classes.data}>
          <span className={`${classes.data__text} ${classes['data__text-header']}`}>В ПУТИ </span>
          <span className={classes.data__text}>21ч 15м</span>
        </div>
        <div className={classes.data}>
          <span className={`${classes.data__text} ${classes['data__text-header']}`}>2 ПЕРЕСАДКИ </span>
          <span className={classes.data__text}>HKG, JNB</span>
        </div>
      </div>
      <div className={classes.tiket__info}>
        <div className={classes.data}>
          <span className={`${classes.data__text} ${classes['data__text-header']}`}>MOW - HKT </span>
          <span className={classes.data__text}>10:45 - 08:00</span>
        </div>
        <div className={classes.data}>
          <span className={`${classes.data__text} ${classes['data__text-header']}`}>В ПУТИ </span>
          <span className={classes.data__text}>21ч 15м</span>
        </div>
        <div className={classes.data}>
          <span className={`${classes.data__text} ${classes['data__text-header']}`}>2 ПЕРЕСАДКИ </span>
          <span className={classes.data__text}>HKG, JNB</span>
        </div>
      </div>
    </div>
  );
}

export default AirTicket;
