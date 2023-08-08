import React from 'react';

import notFound from '../../assets/images/Not-found.svg';

import classes from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={classes.found}>
      <img className={classes['found-img']} src={notFound} alt="Нет результатов" />
      <span className={classes['found-txt']}>Нет рейсов, подходящих под заданные фильтры.</span>
    </div>
  );
};

export default NotFound;
