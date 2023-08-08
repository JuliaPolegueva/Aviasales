import React from 'react';

import classes from './TransferItem.module.scss';

const TransferItem = ({ label, name, onChange, check }) => {
  return (
    <label className={classes.title}>
      <input
        type="checkbox"
        className={classes['custom-checkbox']}
        onChange={element => onChange(name, element.target.checked)}
        checked={check}
      />
      <span className={classes.checkbox}></span>
      {label}
    </label>
  );
};

export default TransferItem;
