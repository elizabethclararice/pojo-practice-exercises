// this function takes in an array as an argument and returns an object, tally, which
// represents the count of each value in the array.

function arrayConverter(array) {
  let tally = {};

  array.forEach(function(ele) {
  // if a key doesnt exist yet, create one and set its value to one
  if (tally[ele] === undefined) {
    tally[ele] = 1;
  // if a key already exists, increment its value by one
    } else {
    tally[ele]++;
    }
  });

  return tally;
};

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}

// mocha tests
module.exports = arrayConverter;
