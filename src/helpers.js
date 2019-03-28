export const countDecimals = num => {
  if (Math.floor(num.valueOf()) === num.valueOf()) return 0;
  return num.toString().split(".")[1].length || 0;
};

export const calculateBaseSize = (size, scale) => {
  return size * scale;
}

export const convertToFixed = (val, num) => {
  return countDecimals(val) > num
    ? val.toFixed(num)
    : val;
}