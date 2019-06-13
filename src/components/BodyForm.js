import React from 'react';
import { TextField } from '@material-ui/core';

const BodyForm = (props) => {
  return (
    <form>
      <TextField 
        fullWidth={true} 
        margin="normal"
        select
        id="bodyFont"
        label="Body Font"
        value={props.bodyFontSelected}
        onChange={props.changeBodyFont}
        SelectProps={{
          native: true,
        }}        
      >
        {props.fonts.map((font, index) => (
          <option key={font.name} value={index}>
            {font.name}
          </option>
        ))}
      </TextField>
      <TextField
        id="bodyWeight"
        label="Body Weight"
        fullWidth={true}
        margin="normal"
        select
        SelectProps={{
          native: true,
        }}
        value={props.bodyWeightSelected}
        onChange={props.changeBodyWeight}
      >
        {props.fonts[props.bodyFontSelected].weights.map(weight => (
          <option
            key={weight}
            value={weight}>
            {weight}
          </option>
        ))}
      </TextField>
      <TextField
        id="lineHeight"
        label="Line Height"
        type="number"
        inputProps={{
          min: 0,
          step: 0.1
        }}
        value={props.lineHeight}
        onChange={props.changeLineHeight}
        fullWidth={true}
        margin="normal"
      />
      <TextField
        id="previewParagraph"
        label="Paragraph Preview Text"
        onChange={props.changePreviewParagraph}
        value={props.previewParagraph}
        multiline={true}
        fullWidth={true}
        margin="normal"
      />
    </form>
  );
};

export default BodyForm;