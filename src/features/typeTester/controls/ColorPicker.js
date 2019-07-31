import React from 'react';
import CustomRadio from '../../../components/CustomRadio';

const ColorPicker = ({themes, themeSelected, handleChange}) => {
  return (
    <div>
      {themes.map(({themeName, colorValue}) => (
        <CustomRadio
          selectedValue={themeSelected === themeName}
          handleChange={handleChange}
          value={themeName}
          name="theme-color-picker"
          label={themeName}
          color={colorValue}
          key={colorValue}
        />
      ))}
    </div>
  );
};

export default ColorPicker;