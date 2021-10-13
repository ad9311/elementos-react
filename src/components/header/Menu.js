import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  const sortingMethods = [
    {
      name: 'Atomic Mass',
      sortBy: 'atomicMass',
    },
    {
      name: 'Melting Point',
      sortBy: 'meltingPoint',
    },
  ];
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
