import React from 'react';
import Input from "@material-ui/core/Input";
import FormField from './FormField';
import Option from './Option';
import {
  InputLabel,
  TextField,
  FormControl,
  NativeSelect
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
      <FormControl
        name="fontFamily"
        text="Headline Font"
        fullWidth={true}
        margin="normal"
      >
        <InputLabel>
          Headline Font
          </InputLabel>
        <NativeSelect
          name="fontFamily"
          id="fontFamily"
          value={props.fontFamily}
          onChange={props.changeHeadlineFont}
        >
          {props.fontFamilies.map(family => (
            <Option
              key={family}
              value={family}>
              {family}
            </Option>
          ))}
        </NativeSelect>
      </FormControl>
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
        <FormControl 
          name="typeScale" 
          text="Scale"
          fullWidth={true}
          margin="normal"
          >
          <InputLabel>
            Scale
          </InputLabel>
          <NativeSelect
            name="typeScale"
            id="typescale"
            value={props.typeScaleSelected}
            onChange={props.changeTypeScale}
          >
            {props.typeScaleValues.map((value, i) => (
              <Option value={i} key={value.name}>
                {value.value} – {value.name}
              </Option>
            ))}
          </NativeSelect>
        </FormControl>
      </form>
  );
};

export default SampleForm;