import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { inspectElement } from '../../store/elements/inspectReducer';
import { formatAtomicMass } from '../../utils/utils';
import groupByCategory from '../../utils/groupByCategory';

const Element = (props) => {
  const {
    atomicMass,
    atomicNumber,
    name,
    symbol,
    yearDiscovered,
    // altColor,
  } = props;
  const dispatch = useDispatch();
  const { elements } = useSelector((state) => state.periodicTable);
  const { groupBy } = useSelector((state) => state.arrange);
  const element = useSelector(
    (state) => state.periodicTable.elements.filter(
      (element) => element.atomicNumber === atomicNumber,
    ),
  )[0];
  const path = `/details/${name.toLowerCase()}`;

  const handleInspection = () => {
    const selection = groupByCategory(groupBy, element, elements);
    dispatch(inspectElement(selection));
  };

  return (
    <NavLink exact to={path} onClick={handleInspection}>
      <section>
        <p>{atomicNumber}</p>
        <h2>{symbol}</h2>
        <h3>{name}</h3>
        <p>{formatAtomicMass(atomicMass)}</p>
        <p>{yearDiscovered}</p>
      </section>
    </NavLink>
  );
};

Element.propTypes = {
  atomicMass: PropTypes.string,
  atomicNumber: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  yearDiscovered: PropTypes.string,
  // altColor: PropTypes.bool,
};

Element.defaultProps = {
  atomicMass: '0',
  atomicNumber: '0',
  name: 'noElement',
  symbol: '0',
  yearDiscovered: '0',
  // altColor: false,
};

export default Element;
