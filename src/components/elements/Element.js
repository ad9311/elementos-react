import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { inspectElement } from '../../store/elements/inspectReducer';
import groupByCategory from '../../utils/groupByCategory';
import Inspect from '../../img/inspect.svg';
import style from './Element.module.css';

const Element = (props) => {
  const {
    atomicMass,
    atomicNumber,
    name,
    symbol,
    altColor,
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
      <section className={altColor ? style.medium : style.light}>
        <div className="d-flex justify-between">
          <p>{atomicNumber}</p>
          <img src={Inspect} alt="inspect" />
        </div>
        <div>
          <h2 className={style.symbol}>{symbol}</h2>
        </div>
        <div className="text-right lh-2">
          <h3>{name}</h3>
          <p>{Number(atomicMass).toFixed(3)}</p>
        </div>
      </section>
    </NavLink>
  );
};

Element.propTypes = {
  atomicMass: PropTypes.string,
  atomicNumber: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  altColor: PropTypes.bool,
};

Element.defaultProps = {
  atomicMass: '0',
  atomicNumber: '0',
  name: 'noElement',
  symbol: '0',
  altColor: false,
};

export default Element;
