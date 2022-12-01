const removeFromArray = function(input, ...args) {
    for (i = 0; i < input.length; i++) {
        for (j = 0; j < args.length; j++) {
            if (input[i] === args[j]) {
                input.splice(i, 1);
                i -= 1;
            }    
        }
    }
    console.log(input);
    return input;
};

// Do not edit below this line
module.exports = removeFromArray;
