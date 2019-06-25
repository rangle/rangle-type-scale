import React from 'react';

const Paragraph = ({ fontColor, fontFamily, fontWeight, lineHeight, text }) => {
  const styles={
    color: `${fontColor}`,
    fontFamily: `${fontFamily}`,
    fontWeight: `${fontWeight}`,
    lineHeight: `${lineHeight}`,
  }
  return (
    <p style={styles}>
      {text}
    </p>
  );
};

export default Paragraph;