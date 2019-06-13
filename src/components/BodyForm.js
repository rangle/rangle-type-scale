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
        value={props.bodyFontFamily}
        onChange={props.changeBodyFont}
        SelectProps={{
          native: true,
        }}        
        >
          {props.fontFamilies.map(family => (
            <option key={family} value={family}>
              {family}
            </option>
          ))}
      </TextField>

        <TextField
          type="number"
          id="bodyWeight"
          label="Body Weight"
          value={props.bodyWeight}
          onChange={props.changeBodyWeight}
          inputProps={{
            step: 100,
            min: 100,
            max: 1000
          }}
          fullWidth={true}
          margin="normal"
        />
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