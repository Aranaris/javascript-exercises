const fibonacci = function(num) {
    let output = 1;
    let input = parseInt(num);
    if (input <= 0) {
        return "OOPS";
    } else if (input <= 2) {
        return output;
    } else {
        return fibonacci(input - 2) + fibonacci(input - 1);
    }
};

// Do not edit below this line
module.exports = fibonacci;
