import React from 'react';

const Paragraph = ({ typeColor, fontFamily, fontWeight, lineHeight, text }) => {
  const styles={
    color: `${typeColor}`,
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