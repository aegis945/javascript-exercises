const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  var sumOfArray = 0;
  if (array === []) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      sumOfArray += array[i];
    }
    return sumOfArray;
  }
};

const multiply = function (array) {
  var multOfArray = 1;
  for (let i = 0; i < array.length; i++) {
    multOfArray *= array[i];
  }
  return multOfArray;
};

const power = function (a, b) {
  /*var powerOfNum = 1;
  for (let i = 1; i <= b; i++) {
    powerOfNum *= a;
  }
  return powerOfNum;*/
  return Math.pow(a, b);
};

const factorial = function (a) {
  factorialOfNum = 1;
  if (a === 0) {
    return 1;
  }
  for (let i = 1; i <= a; i++) {
    factorialOfNum *= i;
  }
  return factorialOfNum;
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
