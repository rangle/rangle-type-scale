import React from 'react';
import styled from "styled-components"; 
import '../../fonts/fonts.css';
import { calculateBaseSize, convertToFixed } from '../../helpers';

const breakpoint = "1100px"

const SampleBody = styled.div`
  line-height: 1.8;

  @media (max-width: ${breakpoint}) {
    margin-bottom: 1em;
  }

  .label {
    color: ${props => props.theme.lightGray};
    display: block;
    
    @media (min-width: ${breakpoint}) {      
      display: inline-block;
      margin-right: 20px;
      text-align: right;
      width: 160px;
    }
  }
`;

const Sample = ({baseSize, typeScaleValue, fontFamily, sampleWeight, previewHeadline}) => {

  const baseSizeValue = calculateBaseSize(baseSize, typeScaleValue);
  const typeScaleEms = convertToFixed(typeScaleValue, 3);
  const typeScalePx = convertToFixed(baseSizeValue, 2);
  const styles = {
    fontSize: `${typeScalePx}px`,
    fontFamily: `${fontFamily}`,
    fontWeight: `${sampleWeight}`,
  };

  return (
    <SampleBody>
      <span className="label">
        {typeScaleEms}em
        ({typeScalePx}px)
      </span>
      <span className="value" style={styles}>
        {previewHeadline}
      </span>
    </SampleBody>
  );
};

export default Sample;