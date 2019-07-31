const APP_CONFIG = {
  PX_DECIMALS: 2,
  EMS_DECIMALS: 3
};

const countDecimals = num => {
  if (Math.floor(num.valueOf()) === num.valueOf()) return 0;
  return num.toString().split(".")[1].length || 0;
};

export const calculateTypeSize = (base, multiplier) => base * multiplier;

export const calculateFontSizeEms = (typeScaleValue, numDecimals) =>
  `${roundOutput(typeScaleValue, numDecimals)}em`;

export const calculateFontSizePx = (
  baseSizeValue,
  numDecimals,
  round = false
) => `${roundOutput(baseSizeValue, numDecimals, round)}px`;

export const calculateFontSizes = (
  baseSize,
  typeScaleValue,
  roundFontSizes
) => {
  const fontSize = calculateTypeSize(baseSize, typeScaleValue);
  const fontSizePx = calculateFontSizePx(
    fontSize,
    APP_CONFIG.PX_DECIMALS,
    roundFontSizes
  );
  const fontSizeEms = calculateFontSizeEms(
    typeScaleValue,
    APP_CONFIG.EMS_DECIMALS
  );
  return {
    fontSize,
    fontSizePx,
    fontSizeEms
  };
};
export const roundOutput = (val, decimals, round = false) => {
  if (round) {
    return Math.round(val);
  } else {
    return countDecimals(val) > decimals ? val.toFixed(decimals) : val;
  }
};
