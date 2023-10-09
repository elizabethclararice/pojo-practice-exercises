// this function takes in an object and a key, returning true if the key is inside the object and false if it is not.

function doesKeyExist(obj, key) {
  if (obj[key] !== undefined) {
    return true;
  }

  return false;
};

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false

// mocha tests
module.exports = doesKeyExist;
