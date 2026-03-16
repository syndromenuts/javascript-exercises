const findTheOldest = function(people) {
    const oldest = people.reduce((runningMax, person) => {
        let runningMaxAge;
        if (runningMax.yearOfDeath === undefined) {
            runningMaxAge = new Date().getFullYear() - runningMax.yearOfBirth;
        } else {
            runningMaxAge = runningMax.yearOfDeath - runningMax.yearOfBirth;
        }

        let personAge;
        if (person.yearOfDeath === undefined) {
            personAge = new Date().getFullYear() - person.yearOfBirth;
        } else {
            personAge = person.yearOfDeath - person.yearOfBirth;
        }

        if (personAge > runningMaxAge) {
            return person;
        } else {
            return runningMax;
        }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
