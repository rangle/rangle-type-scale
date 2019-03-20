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
      </form>
    </div>
  );
};

export default InputForm;