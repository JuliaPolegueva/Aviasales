import React from 'react';

import classes from './Spinner.module.scss';

function Spinner() {
  return (
    <div className={classes['spin-wrapper']}>
      <div className={classes.spinner}></div>
    </div>
  );
}

export default Spinner;
