const reverseString = function(phrase) {
    newString = '';
    if (phrase.length >= 0) {
        for (i = 0; i <= phrase.length; i++) {
            newString += phrase.charAt(phrase.length - i);
        } 
    } else {
            return 'ERROR';
        }
    return newString;
}
;

// Do not edit below this line
module.exports = reverseString;
