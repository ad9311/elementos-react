import React from 'react';
import { useSelector } from 'react-redux';
import GroupElement from '../elements/GroupElement';

const Details = () => {
  const { group } = useSelector((state) => state.inspect);

  const mapGrouping = group.list.map(
    (element) => (
      <li key={element.atomicNumber}>
        <GroupElement
          atomicMass={element.atomicMass}
          atomicNumber={element.atomicNumber}
          name={element.name}
          symbol={element.symbol}
        />
      </li>
    ),
  );

  return (
    <div>
      <ul>
        {mapGrouping}
      </ul>
    </div>
  );
};

export default Details;
