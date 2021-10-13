import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { sortDesc } from '../../store/elements/arrangeReducer';
import { toggle } from '../../utils/utils';
import sortByMethod from '../../utils/sortingMethods';
import { rearrangeElements } from '../../store/elements/loadReducer';

const GroupInfo = (props) => {
  const { groupName } = props;
  const dispatch = useDispatch();
  const { sortBy, orderDescOn, methodName } = useSelector((state) => state.arrange);
  const { elements } = useSelector((state) => (state.periodicTable));

  const getOrder = () => {
    if (orderDescOn) {
      return { a: -1, b: 1 };
    }
    return { a: 1, b: -1 };
  };

  const handleSort = () => {
    dispatch(sortDesc(toggle(orderDescOn)));
    const sortedElements = sortByMethod(elements, sortBy, getOrder());
    dispatch(rearrangeElements(sortedElements));
  };

  const inspectionGroup = (groupName) => (
    <div>
      <p>{`Other ${groupName} elements.`}</p>
    </div>
  );

  const homeGroup = () => (
    <div>
      <p>{`Sorted by ${methodName}`}</p>
      <button type="button" onClick={handleSort}>{orderDescOn ? 'Asce' : 'Desc'}</button>
    </div>
  );

  return (
    <div>
      {groupName !== undefined ? inspectionGroup(groupName) : homeGroup()}
    </div>
  );
};

GroupInfo.propTypes = {
  groupName: PropTypes.string,
};

GroupInfo.defaultProps = {
  groupName: undefined,
};

export default GroupInfo;
