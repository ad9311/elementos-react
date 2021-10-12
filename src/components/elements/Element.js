import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { inspectElement } from '../../store/elements/inspectReducer';
import formatAtomicMass from '../../utils/numeric';

const Element = (props) => {
  const {
    atomicMass,
    atomicNumber,
    name,
    symbol,
    // altColor,
  } = props;
  const dispatch = useDispatch();
  const element = useSelector(
    (state) => state.periodicTable.elementsList.filter(
      (element) => element.atomicNumber === atomicNumber,
    ),
  )[0];

  const handleInspection = () => {
    dispatch(inspectElement(element));
  };

  return (
    <NavLink exact to={`/details/${name}`} onClick={handleInspection}>
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
