import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { sortElements, groupElements } from '../../store/elements/arrangeReducer';
import { rearrangeElements } from '../../store/elements/loadReducer';
import { updateGroup } from '../../store/elements/inspectReducer';
import sortByMethod from '../../utils/sortingMethods';
import groupByCategory from '../../utils/groupByCategory';

const MenuItem = (props) => {
  const { sortBy, groupBy, name } = props;
  const dispatch = useDispatch();
  const { elements } = useSelector((state) => state.periodicTable);
  const { element } = useSelector((state) => state.inspect);

  const handleSortig = () => {
    dispatch(sortElements(sortBy));
    const sortedElements = sortByMethod(elements, sortBy);
    dispatch(rearrangeElements(sortedElements));
  };

  const handleGrouping = () => {
    dispatch(groupElements(groupBy));
    const { group } = groupByCategory(groupBy, element, elements);
    dispatch(updateGroup(group));
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
