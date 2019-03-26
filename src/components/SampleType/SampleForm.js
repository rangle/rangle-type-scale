import React from 'react';
import {
  TextField,
} from "@material-ui/core";

const SampleForm = (props) => {
  return (
    <form>
      <TextField 
        id="baseSize" 
        label="Base Size (px)"
        type="number"
        value={props.baseSize}
        onChange={props.changeBaseSize}
        inputProps={
          {
            min: 1
          }
        }
        fullWidth={true}
        margin="normal"
      />
      <TextField
        label="Headline Font"
        fullWidth={true}
        margin="normal"
        select
        SelectProps={{
          native: true,
        }}        
          id="fontFamily"
          value={props.fontFamily}
          onChange={props.changeHeadlineFont}
        >
          {props.fontFamilies.map(family => (
            <option
              key={family}
              value={family}>
              {family}
            </option>
          ))}
      </TextField>
      <TextField 
        id="sampleWeight" 
        label="Headline Weight"
        type="number"
        value={props.sampleWeight}
        onChange={props.changeWeight}
        inputProps={
          {
            step: 100,
            min: 100,
            max: 1000
          }
        }
        fullWidth={true}
        margin="normal"
      />
      <TextField 
        id="previewHeadline" 
        label="Headline Preview Text"
        value={props.previewHeadline}
        onChange={props.changePreviewHeadline}
        fullWidth={true}
        margin="normal"
      />
      <TextField 
        id="typeScale" 
        label="Scale"
        fullWidth={true}
        margin="normal"
        select
        SelectProps={{
          native: true,
        }}        
        value={props.typeScaleSelected}
        onChange={props.changeTypeScale}
      >
        {props.typeScaleValues.map((value, i) => (
          <option value={i} key={value.name}>
            {value.value} – {value.name}
          </option>
        ))}
      </TextField>
      </form>
  );
};

export default SampleForm;