import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const GroupInfo = (props) => {
  const { groupName } = props;
  const { methodName } = useSelector((state) => state.arrange);

  const inspectionGroup = (groupName) => (
    <p>{`Other ${groupName} elements.`}</p>
  );

  const homeGroup = () => (
    <p>{`Sorted by ${methodName}`}</p>
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
