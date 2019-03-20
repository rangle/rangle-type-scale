import React from 'react';

const countDecimals = (num) => {
  if (Math.floor(num.valueOf()) === num.valueOf()) return 0;
  return num.toString().split(".")[1].length || 0;
}

const Specimen = (props) => {
  const baseSizeValue = props.baseSize * props.typeScaleValue;
  const typeScaleEms = (countDecimals(props.typeScaleValue) > 3 ? props.typeScaleValue.toFixed(3) : props.typeScaleValue);
  const typeScalePx = (countDecimals(baseSizeValue) > 2 ? baseSizeValue.toFixed(2) : baseSizeValue);
  const styles = {
    display: 'inline-block',
    fontSize: `${typeScalePx}px`
  };

  return (
    <li>
      <span>
        {typeScaleEms}
        em&nbsp;
        {typeScalePx}px
      </span>
      <span style={styles}>
        {props.previewText}
      </span>
    </li>
  );
};

export default Specimen;