import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { sortElements, groupElements } from '../../store/elements/arrangeReducer';
import { rearrangeElements } from '../../store/elements/loadReducer';
import sortByMethod from '../../utils/sortingMethods';

const MenuItem = (props) => {
  const { sortBy, groupBy, name } = props;
  const dispatch = useDispatch();
  const { elements } = useSelector((state) => state.periodicTable);

  const handleSortig = () => {
    dispatch(sortElements(sortBy));
    const sortedElements = sortByMethod(elements, sortBy);
    dispatch(rearrangeElements(sortedElements));
  };

  const handleGrouping = () => {
    dispatch(groupElements(groupBy));
  };

  const handleArrange = () => {
    if (sortBy === undefined) {
      return handleGrouping();
    }
    return handleSortig();
  };

  return (
    <li>
      <button type="button" onClick={handleArrange}>{name}</button>
    </li>
  );
};

MenuItem.propTypes = {
  sortBy: PropTypes.string,
  groupBy: PropTypes.string,
  name: PropTypes.string,
};

MenuItem.defaultProps = {
  sortBy: undefined,
  groupBy: undefined,
  name: undefined,
};

export default MenuItem;
