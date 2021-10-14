import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { sortDesc } from '../../store/elements/arrangeReducer';
import { toggle } from '../../utils/utils';
import sortByMethod from '../../utils/sortingMethods';
import { rearrangeElements } from '../../store/elements/loadReducer';
import Asce from '../../img/asce.svg';
import Desc from '../../img/desc.svg';
import style from './Header.module.css';

const GroupInfo = (props) => {
  const { groupName } = props;
  const dispatch = useDispatch();
  const { sortBy, orderDescOn, methodName } = useSelector((state) => state.arrange);
  const { elements } = useSelector((state) => (state.periodicTable));

  const getOrder = () => {
    if (orderDescOn) {
      return false;
    }
    return true;
  };

  const handleSort = () => {
    dispatch(sortDesc(toggle(orderDescOn)));
    const sortedElements = sortByMethod(elements, sortBy, getOrder());
    dispatch(rearrangeElements(sortedElements));
  };

  const inspectionGroup = (groupName) => (
    <div className="plr-1">
      <p>{`Other ${groupName} elements.`}</p>
    </div>
  );

  const sortButton = (svg) => (
    <button
      type="button"
      className={`bg-transparent border-none ${style.icon}`}
      onClick={handleSort}
    >
      <img src={svg} alt="sort" />
    </button>
  );

  const homeGroup = () => (
    <div className="plr-1 d-flex justify-between align-items-center">
      <p>{`Sorted by ${methodName}`}</p>
      {orderDescOn ? sortButton(Asce) : sortButton(Desc)}
    </div>
  );

  return (
    <div className={style.groupinfo}>
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
