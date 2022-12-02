const getTheTitles = function(inputArray) {
    let titles = [];
    for (let i = 0; i < inputArray.length; i++) {
        titles.push(inputArray[i].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
