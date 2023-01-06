const findTheOldest = function(people) {
    const currentYear = 2023;
    let maxAge = 0;
    let oldest = {};
    for(let i = 0; i < people.length; i++) {
        if (people[i]["yearOfDeath"]) {
            people[i]["age"] = people[i]["yearOfDeath"] - people[i]["yearOfBirth"];
        } else {
            people[i]["age"] = currentYear - people[i]["yearOfBirth"];
        };
        if (people[i]["age"] > maxAge) {
            maxAge = people[i]["age"];
            oldest = people[i];
        };
    };
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
