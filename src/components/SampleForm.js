import React from 'react';
import Input from './Input';
import FormField from './FormField';
import Select from './Select';
import Option from './Option';

const SampleForm = (props) => {
  return (
      <form>
        <FormField name="baseSize" text="Base Size">
          <Input
            type="number"
            min="1"
            value={props.baseSize}
            handleChange={props.changeBaseSize}
          />{" "}
          px
        </FormField>
        <FormField name="sampleWeight" text="Weight">
          <Input
            type="number"
            step="100"
            min="100"
            max="1000"
            value={props.sampleWeight}
            handleChange={props.changeWeight}
          />
        </FormField>
        <FormField name="previewHeadline" text="Preview Text">
          <Input
            value={props.previewHeadline}
            handleChange={props.changePreviewHeadline}
          />
        </FormField>
        <FormField name="typeScale" text="Scale">
          <Select
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
          </Select>
        </FormField>
        <FormField name="fontFamily" text="Font">
          <Select
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
          </Select>
        </FormField>
      </form>
  );
};

export default SampleForm;