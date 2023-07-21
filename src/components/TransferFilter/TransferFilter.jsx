import React from 'react';

import classes from './TransferFilter.module.scss';

function TransferFilter(props) {
  return (
    <div className={classes.transfer}>
      <h2 className={classes.transfer__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <form className={classes.filters}>
        <label className={classes.filters__title}>
          <input type="checkbox" className={classes['custom-checkbox']} />
          <span>Все</span>
        </label>
        <label className={classes.filters__title}>
          <input type="checkbox" className={classes['custom-checkbox']} />
          <span>Без пересадок</span>
        </label>
        <label className={classes.filters__title}>
          <input type="checkbox" className={classes['custom-checkbox']} />
          <span>1 пресадка</span>
        </label>
        <label className={classes.filters__title}>
          <input type="checkbox" className={classes['custom-checkbox']} />
          <span>2 пресадки</span>
        </label>
        <label className={classes.filters__title}>
          <input type="checkbox" className={classes['custom-checkbox']} />
          <span>3 пресадки</span>
        </label>
      </form>
    </div>
  );
}

export default TransferFilter;
