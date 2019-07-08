import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { CustomFormControlLabel, CustomTextField } from "./Form.style";

const BaseForm = (props) => {
  return (
    <form>
      <CustomTextField
        id="baseSize"
        label="Base Size (px)"
        type="number"
        value={props.baseSize}
        onChange={props.changeBaseSize}
        inputProps={{
          min: 1
        }}
        fullWidth={true}
        margin="normal"
      />
      <CustomFormControlLabel
        control={
          <Checkbox
            checked={props.roundFontSizes}
            onChange={props.toggleRounding}
          />
        }
        label="Round Font Sizes"
      />
      <CustomTextField
        id="typeScale"
        label="Scale"
        fullWidth={true}
        margin="normal"
        select
        SelectProps={{
          native: true
        }}
        value={props.typeScaleSelected}
        onChange={props.changeTypeScale}
      >
        {props.typeScaleValues.map((value, i) => (
          <option value={i} key={value.name}>
            {value.value} – {value.name}
          </option>
        ))}
      </CustomTextField>
    </form>
  );
};

export default BaseForm;