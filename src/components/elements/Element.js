import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import formatAtomicMass from '../../utils/numeric';

const Element = (props) => {
  const {
    atomicMass,
    atomicNumber,
    name,
    symbol,
    // altColor,
  } = props;

  return (
    <NavLink exact to={`/details/${name}`}>
      <section>
        <p>{atomicNumber}</p>
        <h2>{symbol}</h2>
        <h3>{name}</h3>
        <p>{formatAtomicMass(atomicMass)}</p>
      </section>
    </NavLink>
  );
};

Element.propTypes = {
  atomicMass: PropTypes.string,
  atomicNumber: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  // altColor: PropTypes.bool,
};

Element.defaultProps = {
  atomicMass: '0',
  atomicNumber: '0',
  name: 'noElement',
  symbol: '0',
  // altColor: false,
};

export default Element;
