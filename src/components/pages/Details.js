import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatAtomicMass } from '../../utils/utils';

const Details = () => {
  const { group } = useSelector((state) => state.inspect);
  const path = (name) => `/details/${name.toLowerCase()}`;

  const mapGrouping = group.list.map(
    (element) => (
      <NavLink key={element.atomicNumber} exact to={path(element.name)}>
        <section>
          <p>{element.atomicNumber}</p>
          <h2>{element.symbol}</h2>
          <h3>{element.name}</h3>
          <p>{formatAtomicMass(element.atomicMass)}</p>
        </section>
      </NavLink>
    ),
  );

  return (
    <div>
      {mapGrouping}
    </div>
  );
};

export default Details;
