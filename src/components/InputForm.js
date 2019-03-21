import React from 'react';
import Input from './Input';

const InputForm = (props) => {
  return (
    <div>
      <form>
        <Input 
          name="baseSize" 
          text="Base Size" 
          type="number"
          min="1"
          value={props.baseSize}
          handleChange={props.changeBaseSize} />
        <Input 
          name="weight" 
          text="Weight" 
          type="number"
          step="100"
          min="100"
          max="1000"
          value={props.weight}
          handleChange={props.changeWeight}
        />
        <Input 
          name="previewText" 
          text="Preview Text"
          value={props.previewText}
          handleChange={props.changePreviewText}
         />
         <label for="typeScale">Scale</label>
         <select name="typeScale" id="typescale" value={props.typeScaleSelected} onChange={props.changeTypeScale}>
          {props.typeScaleValues.map((value, i) => (
            <option value={i}>{value.value} – {value.name}</option>
          ))}
         </select>
      </form>
    </div>
  );
};

export default InputForm;