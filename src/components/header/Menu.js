import React from 'react';
import { useLocation } from 'react-router-dom';
import { sortingMethods, groupingMethods } from '../../utils/arrangeArrays';
import { onInspection } from '../../utils/utils';
import MenuItem from './MenuItem';

const Menu = () => {
  const path = useLocation().pathname;
  const mapSortingMethods = sortingMethods.map(
    (method) => (
      <MenuItem
        key={method.sortBy}
        sortBy={method.sortBy}
        name={method.name}
      />
    ),
  );
  const mapGroupingMethods = groupingMethods.map(
    (method) => (
      <MenuItem
        key={method.groupBy}
        groupBy={method.groupBy}
        name={method.name}
      />
    ),
  );

  return (
    <ul>
      {onInspection(path) ? mapGroupingMethods : mapSortingMethods}
    </ul>
  );
};

export default Menu;
