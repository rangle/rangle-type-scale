const countDecimals = (num) => {
  if (Math.floor(num.valueOf()) === num.valueOf()) return 0;
  return num.toString().split(".")[1].length || 0;
}

export const roundOutput = (val, decimals, round=true) => {
  if (round) {
    return Math.round(val)
  } else {
    return (countDecimals(val) > decimals ? val.toFixed(decimals) : val)
  }
};

