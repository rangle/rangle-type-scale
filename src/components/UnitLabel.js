import React from 'react';
import styled from 'styled-components';
import { calculateTypeSize, calculateFontSizeEms, calculateFontSizePx } from '../helpers';

const Label = styled.div`
  background-color: #F0F4F6;
  color: ${props => props.theme.black};
  display: inline-block;
  font-size: 0.875em;
  padding: 3px 0;
  text-align: center;
  width: 70px;
`;

const UnitLabel = ({ 
  baseSize,
  baseUnit,
  roundFontSizes,
  typeScaleValue
 }) => {
  const baseSizeValue = calculateTypeSize(baseSize, typeScaleValue);
  const fontSizeEms = calculateFontSizeEms(typeScaleValue, 3, false);
  const fontSizePx = calculateFontSizePx(baseSizeValue, 2, roundFontSizes);

  return (
    <Label>
      {baseUnit === "px" ?
        fontSizePx : fontSizeEms
      }
    </Label>
  );
};

export default UnitLabel;