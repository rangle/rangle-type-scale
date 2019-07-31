import React from 'react';

const Heading = ({
  fontFamily,
  fontSize,
  fontWeight,
  level,
  lineHeight,
  text,
  typeColor,
}) => {
  
  const styles = {
    color: `${typeColor}`,
    fontFamily: `${fontFamily}`,
    fontSize: `${fontSize}`,
    fontWeight: `${fontWeight}`,
    lineHeight: `${lineHeight}`,
    margin: '0'
  };
  const H = 'h' + level;
  return (
    <H style={styles}>{text}</H>
  );
};

export default Heading;