const findTheOldest = function(data) {
    const now = new Date().getFullYear()
    return data.reduce((prev, curr) =>
    (curr.yearOfDeath ? curr.yearOfDeath : now)-curr.yearOfBirth > (prev.yearOfDeath ? prev.yearOfDeath : now)-prev.yearOfBirth ? prev=curr : prev , data[0])
};

// Do not edit below this line
module.exports = findTheOldest;
