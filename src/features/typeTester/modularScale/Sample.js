import React from 'react';
import '../../../fonts/fonts.css';
import { calculateTypeSize, calculateFontSizeEms, calculateFontSizePx } from '../../../helpers';
import SampleItem from '../../../components/SampleItem';
import Heading from '../bodyScale/Heading';

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
  const fontSize = calculateTypeSize(baseSize, typeScaleValue);
  const fontSizeEms = calculateFontSizeEms(typeScaleValue, 3, false);
  const fontSizePx = calculateFontSizePx(fontSize, 2, roundFontSizes);
  
  return (
    <SampleItem
      focusState={focusState}
      text={baseUnit === "px" ? fontSizePx : fontSizeEms}
    >
      <Heading
        fontFamily={fontFamily}
        fontSize={`${fontSize}px`}
        fontWeight={fontWeight}
        level={1}
        lineHeight={lineHeight}
        text={previewHeadline}
        typeColor={typeColor}
      />
    </SampleItem>
  );
};

export default Sample;