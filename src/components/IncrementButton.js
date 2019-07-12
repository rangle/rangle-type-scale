import React from 'react';
import IndeterminateCheckBox from "@material-ui/icons/IndeterminateCheckBox";
import AddBox from '@material-ui/icons/AddBox';
import IconButton from "@material-ui/core/IconButton";

const IncrementButton = ({ label, handleClick, disabled, increment = true }) => {
  return (
    <IconButton
      aria-label={label}
      onClick={handleClick}
      className="icon-button"
      disabled={disabled}
      increment={increment}
    >
      {increment ? 
        <AddBox /> :
        <IndeterminateCheckBox />
      }
    </IconButton>
  );
};

export default IncrementButton;