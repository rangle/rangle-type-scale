import React from 'react';
import FormField from "./FormField";
import Input from "./Input";
import Select from "./Select";
import Option from "./Option";

const BodyForm = (props) => {
  return (
    <form>
      <FormField name="bodyFont" text="Body Font">
        <Select
          name="fontFamily"
          id="fontFamily"
          value={props.bodyFontFamily}
          handleChange={props.changeBodyFont}
        >
          {props.fontFamilies.map(family => (
            <Option key={family} value={family}>
              {family}
            </Option>
          ))}
        </Select>
      </FormField>
      <FormField name="bodyWeight" text="Body Weight">
        <Input
          type="number"
          step="100"
          min="100"
          max="1000"
          name="bodyWeight"
          value={props.bodyWeight}
          handleChange={props.changeBodyWeight}
        />
      </FormField>
      <FormField name="lineHeight" text="Line Height">
        <Input
          type="number"
          min="0"
          name="lineHeight"
          value={props.lineHeight}
          handleChange={props.changeLineHeight}
        />
      </FormField>
      <FormField name="backgroundColor" text="Background">
        <Input
          name="backgroundColor"
          value={props.backgroundColor}
          handleChange={props.changeBackgroundColor}
        />
      </FormField>
      <FormField name="fontColor" text="Font Colour">
        <Input
          name="fontColor"
          value={props.bodyFontColor}
          handleChange={props.changeFontColor}
        />
      </FormField>
      <FormField
        name="previewParagraph"
        text="Preview Text"
      >
        <textarea
          onChange={props.changePreviewParagraph}
          value={props.previewParagraph}
        ></textarea>
      </FormField>
    </form>
  );
};

export default BodyForm;