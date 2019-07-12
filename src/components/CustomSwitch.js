import React from 'react';
import styled from 'styled-components';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { CustomFormControlLabel } from '../features/typeTester/controls/Form.style';

const StyledSwitch = styled(Switch)`

`;

const CustomSwitch = ({ checked, handleChange, label }) => {
  const controlColors = {
    off: "#1FC028",
    on: "#D44527"
  }; 

  return (
    <CustomFormControlLabel
      control={
        <StyledSwitch
          checked={checked}
          classes={{
            root: "custom-switch-control",
            checked: "custom-switch-control--checked"
          }}
          onChange={handleChange}
          value="checkedB"
        />
      }
      labelPlacement="start"
      label={label}
      classes={{
        labelPlacementStart: "custom-form-control-label--start"
      }}
    />
  );
};

export default CustomSwitch;