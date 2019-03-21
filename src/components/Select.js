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
        {props.array.map((item, index) => (
          <option value={index}>{item}</option>
        ))}
      </select>      
    </div>
  );
};

export default Select;