// this function simply takes in a person object and returns a string containing their full name.

function getFullName(person) {
  let fullName = person.firstName + " " + person.lastName;
  return fullName;
};

// mocha tests
module.exports = getFullName;
