import React from 'react';
import styled from "styled-components"; 
import '../../../fonts/fonts.css';
import { calculateTypeSize, calculateFontSizeEms, calculateFontSizePx } from '../../../helpers';
import UnitLabel from '../../../components/UnitLabel';

const SampleBody = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 20px;
  margin-bottom: 30px;
`;

const Sample = ({
  baseSize,
  baseUnit,
  focusState,
  fontFamily,
  fontWeight,
  lineHeight,
  previewHeadline,
  roundFontSizes,
  typeColor,
  typeScaleValue,
}) => {
  const baseSizeValue = calculateTypeSize(baseSize, typeScaleValue);
  const fontSizeEms = calculateFontSizeEms(typeScaleValue, 3, false);
  const fontSizePx = calculateFontSizePx(baseSizeValue, 2, roundFontSizes);
  
  const headlineStyles = {
    color: `${typeColor}`,
    fontSize: `${fontSizePx}`,
    fontFamily: `${fontFamily}`,
    fontWeight: `${fontWeight}`,
    lineHeight: `${lineHeight}`
  };

  return (
    <SampleBody>
      {!focusState && 
        <UnitLabel
          text={baseUnit === "px" ? fontSizePx : fontSizeEms}
        />
      }
      <div 
        className="value" 
        style={headlineStyles}>
        {previewHeadline}
      </div>
    </SampleBody>
  );
};

export default Sample;