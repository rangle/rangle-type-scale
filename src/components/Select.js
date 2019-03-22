import React from 'react';

const Select = (props) => {
  return (
    <div>
      <select
        name={props.name}
        id={props.name}
        value={props.selectedValue}
        onChange={props.handleChange}
      >
        {props.children}
      </select>      
    </div>
  );
};

export default Select;