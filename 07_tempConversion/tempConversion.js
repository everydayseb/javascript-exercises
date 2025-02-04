const convertToCelsius = function(tempInF) {
  const tempInC = (tempInF - 32) * 5 / 9;
  return parseFloat(tempInC.toFixed(1));
};

const convertToFahrenheit = function(tempInC) {
  const tempInF = tempInC * 9 / 5 + 32;
  return parseFloat(tempInF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
