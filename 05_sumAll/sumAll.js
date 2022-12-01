const sumAll = function(start, end) {
    let sum = 0;
    if (start >= 0 && end >= 0 && Number.isInteger(start) && Number.isInteger(end)) {
        if (start <= end) {
            for (let i = 0; i <= end - start; i++) {
                sum += start + i;
            }
        } else {
            for (let i = 0; i <= start - end; i++) {
                sum += end + i;
            }
        }
    } else {
        return 'ERROR';
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
