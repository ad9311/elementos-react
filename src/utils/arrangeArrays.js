export const sortingMethods = [
  {
    name: 'Atomic Mass',
    sortBy: 'atomicMass',
  },
  {
    name: 'Boling Point',
    sortBy: 'boilingPoint',
  },
  {
    name: 'Density',
    sortBy: 'density',
  },
  {
    name: 'Melting Point',
    sortBy: 'meltingPoint',
  },
  {
    name: 'Name',
    sortBy: 'name',
  },
  {
    name: 'Year of Discovery',
    sortBy: 'yearDiscovered',
  },
];

export const getSortingName = (sortBy) => {
  const displayMethod = sortingMethods.filter((method) => method.sortBy === sortBy)[0];
  return displayMethod.name;
};

export const groupingMethods = [
  {
    name: 'Standard State',
    groupBy: 'standardState',
  },
  {
    name: 'Group Block',
    groupBy: 'groupBlock',
  },
];
