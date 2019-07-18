import React from 'react';
import styled from "styled-components";
import '../fonts/fonts.css';
import { calculateTypeSize, calculateFontSizeEms, calculateFontSizePx } from '../helpers';
import UnitLabel from './UnitLabel';

const SampleBody = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 20px;
  margin-bottom: 30px;
`;

const SampleItem = ({
  baseSize,
  baseUnit,
  children,
  focusState,
  roundFontSizes,
  typeScaleValue,
}) => {
  const baseSizeValue = calculateTypeSize(baseSize, typeScaleValue);
  const fontSizeEms = calculateFontSizeEms(typeScaleValue, 3, false);
  const fontSizePx = calculateFontSizePx(baseSizeValue, 2, roundFontSizes);

  return (
    <SampleBody>
      {!focusState &&
        <UnitLabel
          text={baseUnit === "px" ? fontSizePx : fontSizeEms}
        />
      }
      <div>
        {children}
      </div>
    </SampleBody>
  );
};

export default SampleItem;