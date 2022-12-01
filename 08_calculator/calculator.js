const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(input) {
	let output = 0;
  for (let i = 0; i < input.length; i++) {
    output += input[i];
  }
  return output;
};

const multiply = function(input) {
  let output = 1;
  for (let i = 0; i < input.length; i++) {
    output *= input[i];
  }
  return output;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let output = 1;
  if (a === 0) {
    return 1;
  } else if (a > 0) {
    for (let i = 1; i <= a; i++) {
      output *= i;
    }
  } else {
    return 'ERROR';
  }
  return output;
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
