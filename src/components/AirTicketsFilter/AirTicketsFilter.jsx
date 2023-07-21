import React from 'react';

import classes from './AirTicketsFilter.module.scss';

function AirTicketsFilter(props) {
  return (
    <div className={classes.filter}>
      <button className={`${classes.filter__btn} ${classes['filter__btn--left']}`} type="button">
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className={`${classes.filter__btn} ${classes['filter__btn--right']}`} type="button">
        САМЫЙ БЫСТРЫЙ
      </button>
    </div>
  );
}

export default AirTicketsFilter;
