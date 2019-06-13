import React from 'react';
import {
  TextField,
} from "@material-ui/core";

const HeadingForm = (props) => {
  return (
    <form>
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
        label="Headline Preview"
        value={props.previewHeadline}
        onChange={props.changePreviewHeadline}
        fullWidth={true}
        margin="normal"
      />
      </form>
  );
};

export default HeadingForm;