import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  const { sortBy, name } = props;
  const handleArrange = () => {
    console.log(sortBy);
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
