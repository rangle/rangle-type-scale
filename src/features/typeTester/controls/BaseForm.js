import React from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import { CustomFormControlLabel, CustomTextField, CustomFormLabel } from "./Form.style";
import ColorPicker from './ColorPicker';

const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 25px;
  margin-bottom: 5px;
`;

const BaseForm = (props) => {
  return (
    <form>
      <GridRow>
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
          classes={{
            root: "custom-text-field, custom-text-field--half-width"
          }}
        />
        <CustomTextField
          id="typeUnits"
          label="Type Unit"
          fullWidth={true}
          margin="normal"
          classes={{
            root: "custom-text-field, custom-text-field--half-width"
          }}
          select
          SelectProps={{
            native: true
          }}
          value={props.baseUnit}
          onChange={props.toggleUnits}
        >
          {props.typeUnits.map((unit, i) => (
            <option value={unit} key={unit}>
              {unit}
            </option>
          ))}
        </CustomTextField>
      </GridRow>
      <CustomFormControlLabel
        control={
          <Checkbox
            checked={props.roundFontSizes}
            onChange={props.toggleRounding}
            inputProps={{
              tabIndex: 0
            }}
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
      <CustomFormLabel component="legend" classes={{ root: "label-legend" }}>
        Colour Theme
      </CustomFormLabel>
      <ColorPicker
        handleChange={props.changeTheme}
        themes={props.themes}
        themeSelected={props.themeSelected}
      />
    </form>
  );
};

export default BaseForm;