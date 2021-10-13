import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { inspectElement } from '../../store/elements/inspectReducer';
import { formatAtomicMass } from '../../utils/utils';
import groupByCategory from '../../utils/groupByCategory';

const GroupElement = (props) => {
  const {
    atomicMass,
    atomicNumber,
    name,
    symbol,
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
        <span>{`(${symbol}) `}</span>
        <span>{name}</span>
        <span>{formatAtomicMass(atomicMass)}</span>
      </section>
    </NavLink>
  );
};

GroupElement.propTypes = {
  atomicMass: PropTypes.string,
  atomicNumber: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  // altColor: PropTypes.bool,
};

GroupElement.defaultProps = {
  atomicMass: '0',
  atomicNumber: '0',
  name: 'noElement',
  symbol: '0',
  // altColor: false,
};

export default GroupElement;
