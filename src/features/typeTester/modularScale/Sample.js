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


const Sample = (props) => {
  const baseSizeValue = props.baseSize * props.typeScaleValue;
  const typeScaleEms = `${roundOutput(props.typeScaleValue, 3, props.roundFontSizes)}em`;
  const typeScalePx = `${roundOutput(baseSizeValue, 2, props.roundFontSizes)}px`;
  
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