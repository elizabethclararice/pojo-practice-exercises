// this function takes in an array of objects and a string. it will return true if any of the objects
// contain the `keyString` as a key within them, and false if not.

function keyInObjectArray(objArray, keyString) {
let keyFound = false;

  objArray.forEach(function(object) {
  // checks if keyString is undefined to determine if it is present
    if (object[keyString] !== undefined) {
      keyFound = true;
    }
  })

  return keyFound;
};

let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false


// mocha tests
module.exports = keyInObjectArray;
