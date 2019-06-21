import React from 'react';

const Heading = (props) => {
  const fontSize = Math.pow(props.typeScaleSize, props.multiplier);
  const fontSizeToPx = props.baseSize * fontSize;
  const styles = {
    fontFamily: `${props.fontFamily}`,
    fontSize: `${fontSizeToPx}px`,
    fontWeight: `${props.headingWeightSelected}`,
    margin: '2rem 0 1rem'
  };
  const H = 'h' + props.level;
  return (
    <H style={styles}>{props.text}</H>
  );
};

export default Heading;