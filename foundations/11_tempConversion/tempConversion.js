const convertToCelsius = function(tempInFahrenheit) {
  const tempInCelsius = (tempInFahrenheit - 32) * 5 / 9;
  const rounded = Math.round(tempInCelsius * 10) / 10;

  return rounded;
};

const convertToFahrenheit = function(tempInCelsius) {
  const tempInFahrenheit = tempInCelsius * 9 / 5 + 32
  const rounded = Math.round(tempInFahrenheit * 10) / 10;

  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
