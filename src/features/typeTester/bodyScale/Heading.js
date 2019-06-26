import React from 'react';
import { calculateTypeSize, calculateFontSizePx } from '../../../helpers';

const Heading = ({
  baseSize,
  fontFamily,
  fontWeight,
  level,
  lineHeight,
  multiplier,
  text,
  typeScaleSize,
}) => {
  const fontSize = calculateTypeSize(baseSize, Math.pow(typeScaleSize, multiplier));
  const fontSizePx = calculateFontSizePx(fontSize, 4, false);
  
  const styles = {
    fontFamily: `${fontFamily}`,
    fontSize: `${fontSizePx}`,
    fontWeight: `${fontWeight}`,
    lineHeight: `${lineHeight}`,
    margin: '2rem 0 1rem'
  };
  const H = 'h' + level;
  return (
    <H style={styles}>{text}</H>
  );
};

export default Heading;