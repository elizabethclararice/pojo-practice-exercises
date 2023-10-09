// this function takes in two objects and a key (string). it returns an array containing
// the corresponding values of the object for the given key argument.

function valuePair(obj1, obj2, key) {
  let result = [];

  // looks for the key in the first object, pushing values to result
  if (obj1[key] !== undefined) {
    result.push(obj1[key]);
  }

  // looks for the key in the second object, pushing values to result
  if (obj2[key] !== undefined) {
    result.push(obj2[key]);
  }

  return result;
};

let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]

// mocha tests
module.exports = valuePair;
