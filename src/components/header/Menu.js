import React from 'react';
import sortingMethods from '../../utils/sortingMethodsArray';
import MenuItem from './MenuItem';

const Menu = () => {
  const mapSortingMethods = sortingMethods.map(
    (method) => (
      <MenuItem
        key={method.sortBy}
        sortBy={method.sortBy}
        name={method.name}
      />
    ),
  );
  return (
    <ul>
      {mapSortingMethods}
    </ul>
  );
};

export default Menu;
