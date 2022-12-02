const palindromes = function (input) {
    let reverseInput = '';
    let strippedInput = '';
    for (let i = 0; i < input.length; i++) {
        if (/^[A-Za-z]+$/.test(input.charAt(i)) ) {
            strippedInput += input.charAt(i);
            reverseInput = input.charAt(i) + reverseInput;
        }
    }
    if (reverseInput.toUpperCase() === strippedInput.toUpperCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
