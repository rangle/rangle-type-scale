import React from 'react';

const Option = (props) => {
  return (
    <option value={props.value}>
      {props.children}
    </option>
  );
};

export default Option;