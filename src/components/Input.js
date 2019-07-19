import React from 'react';

const Input = (props) => {
  const step = props.step;
  const min = props.min;
  const max = props.max;

  return (
    <input 
      type={props.type || "text"} 
      name={props.name} 
      id={props.name} 
      value={props.value}
      step={step}
      min={min}
      max={max}
      onChange={props.handleChange}
    ></input>    
  );
};

export default Input;