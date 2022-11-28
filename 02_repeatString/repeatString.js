const repeatString = function(inputString, numReps) {
    if (numReps < 0) {
        return 'ERROR';
    }
    let finalString = '';
    for (let i = 0; i < numReps; i++) {
        finalString += inputString;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
