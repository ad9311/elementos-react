import React from 'react';
import PropTypes from 'prop-types';

const GroupInfo = (props) => {
  const { groupName } = props;

  const inspectionGroup = (groupName) => (
    <p>{`Other ${groupName} elements.`}</p>
  );

  const homeGroup = () => (
    <p>Sorted by Atomic Mass</p>
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
