import React from 'react';
import styled from "styled-components"; 
import '../../../fonts/fonts.css';
import { roundOutput } from '../../../helpers';

const SampleBody = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 20px;
  margin-bottom: 30px;

  .label {
    background-color: #F0F4F6;
    color: ${props => props.theme.black};
    display: inline-block;
    font-size: 0.875em;
    padding: 3px 0;
    text-align: center;
    width: 70px;
  }
`;

const Sample = ({
  baseSize,
  baseUnit,
  fontFamily,
  fontWeight,
  lineHeight,
  previewHeadline,
  roundFontSizes,
  typeScaleValue,
  typeScaleSize
}) => {
  const baseSizeValue = baseSize * typeScaleValue * typeScaleSize;
  const typeScaleEms = `${roundOutput(typeScaleValue, 3)}em`;
  const typeScalePx = `${roundOutput(baseSizeValue, 2, roundFontSizes)}px`;
  
  const headlineStyles = {
    fontSize: `${typeScalePx}`,
    fontFamily: `${fontFamily}`,
    fontWeight: `${fontWeight}`,
    lineHeight: `${lineHeight}`
  };

  return (
    <SampleBody>
      <div className="label">
        {baseUnit === "px" ? 
          typeScalePx : typeScaleEms
        }
      </div>
      <div className="value" style={headlineStyles}>
        {previewHeadline}
      </div>
    </SampleBody>
  );
};

export default Sample;