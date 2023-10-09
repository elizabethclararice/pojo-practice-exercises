// this function takes in an object and returns an array containing all the keys from the object followed by
// all of the values they correspond to, as an exercise in spread syntax.

function breakDownObj(obj) {

// first finds all keys
  let keys = Object.keys(obj);

// then finds all values
  let values = Object.values(obj);

// uses spread to add them all into the result array
  let result = [ ...keys, ...values ];

  return result;
};

let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {location: 'NY', borough: 'Brooklyn'};
breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]

// mocha tests
module.exports = breakDownObj;
