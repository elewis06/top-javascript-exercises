const getAgeHelper = function (person) {
    if (!person.hasOwnProperty('yearOfDeath')) {
        let currentYear = new Date().getFullYear();

        return currentYear - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    let ages = people.map(getAgeHelper);
    let oldestAge = Math.max(...ages);
    let oldestIndex = ages.indexOf(oldestAge);

    return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
