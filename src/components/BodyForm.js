import React from 'react';
import Option from "./Option";
import { InputLabel, TextField, FormControl, NativeSelect } from '@material-ui/core';

const BodyForm = (props) => {
  return (
    <form>
      <FormControl fullWidth={true} margin="normal">
        <InputLabel name="bodyFont">Body Font</InputLabel>
        <NativeSelect
          name="fontFamily"
          id="fontFamily"
          value={props.bodyFontFamily}
          onChange={props.changeBodyFont}
        >
          {props.fontFamilies.map(family => (
            <Option key={family} value={family}>
              {family}
            </Option>
          ))}
        </NativeSelect>
      </FormControl>
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
          step: 0.25
        }}
        value={props.lineHeight}
        onChange={props.changeLineHeight}
        fullWidth={true}
        margin="normal"
      />
      <TextField
        id="backgroundColor"
        label="Background Color"
        value={props.backgroundColor}
        onChange={props.changeBackgroundColor}
        fullWidth={true}
        margin="normal"
      />
      <TextField
        id="fontColor"
        label="Font Color"
        value={props.bodyFontColor}
        onChange={props.changeFontColor}
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