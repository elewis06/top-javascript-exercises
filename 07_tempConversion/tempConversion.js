const convertToCelsius = function(temperatureInFahrenheit) {
  // °C = (°F - 32) × 5/9
  let temperatureInCelsius = (temperatureInFahrenheit - 32) * 5 / 9;
  return Math.round((temperatureInCelsius + Number.EPSILON) * 10) / 10;
};

const convertToFahrenheit = function(temperatureInCelsius) {
  // °F = (°C × 9/5) + 32
  let temperatureInFahrenheit = (temperatureInCelsius * 9 / 5) + 32;
  return Math.round((temperatureInFahrenheit + Number.EPSILON) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
