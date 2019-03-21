import React from 'react';
import Input from './Input';
import FormField from './FormField';

const InputForm = (props) => {
  return (
    <div>
      <form>
        <FormField
          name="baseSize"
          text="Base Size"
        >
          <Input
            type="number"
            min="1"
            value={props.baseSize}
            handleChange={props.changeBaseSize}
          /> px
        </FormField>
        <FormField
          name="weight"
          text="Weight"
        >
          <Input
            type="number"
            step="100"
            min="100"
            max="1000"
            value={props.weight}
            handleChange={props.changeWeight}
          />
        </FormField>
        <FormField
          name="previewText"
          text="Preview Text"
        >
          <Input
            value={props.previewText}
            handleChange={props.changePreviewText}
          />
        </FormField>
        <FormField name="typeScale" text="Scale">
        <select
          name="typeScale"
          id="typescale"
          value={props.typeScaleSelected}
          onChange={props.changeTypeScale}
        >
          {props.typeScaleValues.map((value, i) => (
            <option 
              value={i}
              key={value.name}>
              {value.value} – {value.name}
            </option>
          ))}
        </select>
        </FormField>
        <FormField 
          name="fontFamily" text="Font">
          <select
            name="fontFamily"
            id="fontFamily"
            value={props.fontFamily}
            onChange={props.changeFont}
          >
            {props.fontFamilies.map(family => (
              <option 
                key={family}
                value={family}>{family}</option>
            ))}
          </select>
        </FormField>  
      </form>
    </div>
  );
};

export default InputForm;