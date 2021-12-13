import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChangeFilter}></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;
