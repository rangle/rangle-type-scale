import React from 'react';
import styled from 'styled-components';
import Radio from "@material-ui/core/Radio";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const shadowRadius = 3;

const CustomRadioButton = styled(Radio)`
  &.custom-radio-button {
    border: 1px solid ${props => props.theme.darkGray};
    box-shadow: 0 0 0 ${shadowRadius * 2}px rgba(255, 255, 255, 0);
    margin: 0 8px ${shadowRadius * 2}px;
    padding: 0;
  }

  &.custom-radio-button__checked[class*="colorSecondary"] {
    box-shadow: 0 0 0 ${shadowRadius}px #ffffff, 0 0 0 ${shadowRadius * 2}px ${props => props.theme.darkGray};
  }
`;

const CustomRadio = ({selectedValue, handleChange, value, name, color, label}) => {
  const styles = {
    color: `${color}`,
    backgroundColor: `${color}`
  };

  return (
    <CustomRadioButton
      checked={selectedValue}
      onChange={handleChange}
      value={value}
      name={name}
      inputProps={{ "aria-label": label }}
      icon={<FiberManualRecordIcon fontSize="small" />}
      checkedIcon={<FiberManualRecordIcon fontSize="small" />}
      classes={{
        root: "custom-radio-button",
        checked: "custom-radio-button__checked",
      }}
      style={styles}
    />
  );
};

export default CustomRadio;