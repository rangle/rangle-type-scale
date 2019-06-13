import React from 'react';
import {
  TextField,
} from "@material-ui/core";

const HeadingForm = (props) => {
  return (
    <form>
      <TextField
        label="Heading Font"
        fullWidth={true}
        margin="normal"
        select
        SelectProps={{
          native: true,
        }}        
          id="fontFamily"
        value={props.fonts[props.headingFontSelected].name}
          onChange={props.changeHeadlineFont}
        >
          {props.fonts.map(font => (
            <option
              key={font.name}
              value={font.name}>
              {font.name}
            </option>
          ))}
      </TextField>
      <TextField
        label="Heading Weight"
        fullWidth={true}
        margin="normal"
        select
        SelectProps={{
          native: true,
        }}
        id="fontWeights"
        value={props.headingWeightSelected}
        onChange={props.changeHeadingWeight}
      >
        {props.fonts[props.headingFontSelected].weights.map(weight => (
          <option
            key={weight}
            value={weight}>
            {weight}
          </option>
        ))}
      </TextField>
      <TextField
        id="lineHeight"
        label="Heading Line Height"
        type="number"
        inputProps={{
          min: 0,
          step: 0.1
        }}
        value={props.headingLineHeight}
        onChange={props.changeHeadingLineHeight}
        fullWidth={true}
        margin="normal"
      />
      <TextField 
        id="previewHeadline" 
        label="Heading Text"
        value={props.previewHeadline}
        onChange={props.changePreviewHeadline}
        fullWidth={true}
        margin="normal"
      />
      </form>
  );
};

export default HeadingForm;