import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TransferItem from '../TransferItem';
import { checkFilter } from '../../store/transfer/transfer.slice';

import classes from './TransferFilter.module.scss';

const TransferFilter = () => {
  const dispatch = useDispatch();

  const check = useSelector(state => state.transfer);

  const onChange = (name, event) => {
    dispatch(checkFilter([name, event, filterNames]));
  };

  const filterListNames = [
    { label: 'Все', name: 'all' },
    { label: 'Без пересадок', name: '0' },
    { label: '1 пересадка', name: '1' },
    { label: '2 пересадки', name: '2' },
    { label: '3 пересадки', name: '3' },
  ];

  const filterNames = filterListNames.reduce((arrNames, filter) => {
    arrNames.push(filter.name);
    return arrNames;
  }, []);

  const renderTransfers = filters => {
    return filters.map(({ label, name }) => {
      return (
        <TransferItem
          key={label}
          name={name}
          label={label}
          onChange={onChange}
          check={check[name]}
          filterNames={filterNames}
        />
      );
    });
  };

  const items = renderTransfers(filterListNames);

  return (
    <div className={classes.transfer}>
      <h2 className={classes.transfer__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <form className={classes.filters}>{items}</form>
    </div>
  );
};

export default TransferFilter;
