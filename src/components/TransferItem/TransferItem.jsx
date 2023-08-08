import React from 'react';

import classes from './TransferItem.module.scss';

function TransferItem({ label, name, onChange, check }) {
  return (
    <label className={classes.title}>
      <input
        type="checkbox"
        className={classes['custom-checkbox']}
        onChange={e => onChange(name, e.target.checked)}
        checked={check}
      />
      <span className={classes.checkbox}></span>
      {label}
    </label>
  );
}

export default TransferItem;
