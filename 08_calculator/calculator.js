const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	return arr.reduce((prev, curr) => prev + curr, 0)
};

const multiply = function(arr) {
  return arr.reduce((prev, curr) => prev * curr, 1)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  let res = 1
	for (let i = 2; i < a+1; i++) {
    res *= i
  }
  return res
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
