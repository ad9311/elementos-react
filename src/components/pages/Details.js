import React from 'react';
import { useSelector } from 'react-redux';
import { formatAtomicMass } from '../../utils/utils';

const Details = () => {
  const { group } = useSelector((state) => state.inspect.selection);

  const mapGrouping = group.list.map(
    (element) => (
      <li key={element.atomicNumber}>
        <h3>{element.name}</h3>
        <p>{formatAtomicMass(element.atomicMass)}</p>
      </li>
    ),
  );

  return (
    <div>
      {group.name}
      {mapGrouping}
    </div>
  );
};

export default Details;
