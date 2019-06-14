import React from 'react';

const Paragraph = (props) => {
  const styles={
    color: `${props.bodyFontColor}`,
    fontFamily: `${props.bodyFont}`,
    lineHeight: `${props.bodyLineHeight}`,
    fontWeight: `${props.bodyWeightSelected}`
  }
  return (
    <p style={styles}>
      {props.text}
    </p>
  );
};

export default Paragraph;