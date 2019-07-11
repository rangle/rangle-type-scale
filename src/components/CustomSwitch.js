import React from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const CustomSwitch = ({ checked = true, handleChange }) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          value="checkedB"
        />
      }
      labelPlacement="start"
      label="Focus Mode"
    />
  );
};

export default CustomSwitch;