import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { sortElements } from '../../store/elements/arrangeReducer';
import { rearrangeElements } from '../../store/elements/loadReducer';
import { sortByMethod } from '../../utils/sortingMethods';

const MenuItem = (props) => {
  const { sortBy, name } = props;
  const dispatch = useDispatch();
  const { elements } = useSelector((state) => state.periodicTable);
  const handleArrange = () => {
    dispatch(sortElements(sortBy));
    const sortedElements = sortByMethod(elements, sortBy);
    dispatch(rearrangeElements(sortedElements));
  };

  return (
    <li>
      <button type="button" onClick={handleArrange}>{name}</button>
    </li>
  );
};

MenuItem.propTypes = {
  sortBy: PropTypes.string,
  name: PropTypes.string,
};

MenuItem.defaultProps = {
  sortBy: undefined,
  name: undefined,
};

export default MenuItem;
