import React from 'react';

const Paragraph = (props) => {
  const styles={
    color: `${props.bodyFontColor}`,
    lineHeight: `${props.lineHeight}`,
    fontWeight: `${props.bodyWeight}`
  }
  return (
    <p style={styles}>
      {props.text}
    </p>
  );
};

export default Paragraph;