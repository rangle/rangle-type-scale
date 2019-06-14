import React from 'react';
import styled from "styled-components"; 
import '../fonts/fonts.css';

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
    width: 60px;
  }
`;

const countDecimals = (num) => {
  if (Math.floor(num.valueOf()) === num.valueOf()) return 0;
  return num.toString().split(".")[1].length || 0;
}

const Sample = (props) => {
  const roundOutput = (val, decimals) => {
    if (props.roundFontSizes) {
      return Math.round(val)
    } else {
      return (countDecimals(val) > decimals ? val.toFixed(decimals) : val)
    }
  };
  const baseSizeValue = props.baseSize * props.typeScaleValue;
  const typeScaleEms = `${roundOutput(props.typeScaleValue, 3)}em`;
  const typeScalePx = `${roundOutput(baseSizeValue, 2)}px`;
  
  const headlineStyles = {
    fontSize: typeScalePx,
    fontFamily: `${props.fonts[props.headingFontSelected].name}`,
    fontWeight: `${props.headingWeightSelected}`,
    lineHeight: `${props.headingLineHeight}`
  };

  return (
    <SampleBody>
      <div className="label">
        {props.baseUnit === "px" ? 
          typeScalePx : typeScaleEms
        }
      </div>
      <div className="value" style={headlineStyles}>
        {props.previewHeadline}
      </div>
    </SampleBody>
  );
};

export default Sample;