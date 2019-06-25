import React from 'react';

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
  const fontSize = Math.pow(typeScaleSize, multiplier);
  const fontSizeToPx = baseSize * fontSize;
  const styles = {
    fontFamily: `${fontFamily}`,
    fontSize: `${fontSizeToPx}px`,
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