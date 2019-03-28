import React from 'react';
import { calculateBaseSize } from '../helpers';

const Heading = ({baseSize, typeScaleSize, multiplier, fontFamily, sampleWeight, level, text}) => {
  const fontSize = Math.pow(typeScaleSize, multiplier);
  const fontSizeToPx = calculateBaseSize(baseSize, fontSize);
  const styles = {
    fontFamily: `${fontFamily}`,
    fontSize: `${fontSizeToPx}px`,
    fontWeight: `${sampleWeight}`,
    margin: '2rem 0 1rem'
  };
  const H = 'h' + level;
  return (
    <H style={styles}>{text}</H>
  );
};

export default Heading;