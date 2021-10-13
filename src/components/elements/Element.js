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
    noLink,
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

  const section = () => (
    <section>
      <p>{atomicNumber}</p>
      <h2>{symbol}</h2>
      <h3>{name}</h3>
      <p>{formatAtomicMass(atomicMass)}</p>
    </section>
  );

  const hasLink = () => {
    if (noLink) {
      return section();
    }
    return (
      <NavLink exact to={path} onClick={handleInspection}>
        {section()}
      </NavLink>
    );
  };

  return hasLink();
};

Element.propTypes = {
  atomicMass: PropTypes.string,
  atomicNumber: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  noLink: PropTypes.bool,
  // altColor: PropTypes.bool,
};

Element.defaultProps = {
  atomicMass: '0',
  atomicNumber: '0',
  name: 'noElement',
  symbol: '0',
  noLink: false,
  // altColor: false,
};

export default Element;
