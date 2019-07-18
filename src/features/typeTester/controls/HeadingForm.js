import React from 'react';
import { CustomTextField } from './Form.style';

const HeadingForm = (props) => {
  return (
    <form>
      <CustomTextField
        label="Heading Font"
        fullWidth={true}
        margin="normal"
        select
        id="headingFont"
        value={props.headingFontSelected}
        onChange={props.changeHeadingFont}
      >
        {props.fonts.map((font, index) => (
          <option key={font.name} value={index}>
            {font.name}
          </option>
        ))}
      </CustomTextField>
      <CustomTextField
        id="headingWeight"
        label="Heading Weight"
        fullWidth={true}
        margin="normal"
        select
        value={props.headingWeightSelected}
        onChange={props.changeHeadingWeight}
      >
        {props.fonts[props.headingFontSelected].weights.map(weight => (
          <option key={weight} value={weight}>
            {weight}
          </option>
        ))}
      </CustomTextField>
      <CustomTextField
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
      <CustomTextField
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