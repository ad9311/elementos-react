import React from 'react';
import { useSelector } from 'react-redux';
import GroupElement from '../elements/GroupElement';
import style from '../elements/Element.module.css';

const Details = () => {
  const { group } = useSelector((state) => state.inspect);

  const mapGrouping = group.list.map(
    (element) => (
      <li key={element.atomicNumber} className={style.groupElement}>
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
    <div className="mb-3">
      <ul>
        {mapGrouping}
      </ul>
    </div>
  );
};

export default Details;
