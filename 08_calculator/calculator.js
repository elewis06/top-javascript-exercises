const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((accumulator, currentElem) => accumulator += currentElem, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, currentElem) => accumulator *= currentElem, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(num) {
	if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
