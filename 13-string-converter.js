// this function takes in a string as an argument and returns an object, tally, representing
// the count of each character in the string

function stringConverter(string) {
  let array = string.split('');
  let tally = {};

  array.forEach(function(ele) {
  // if a key doesnt exist yet, create one and set it's value to one
  if (tally[ele] === undefined) {
    tally[ele] = 1;
  // if a key already exists, increment its value by one
    } else {
    tally[ele]++;
    }
  });

  return tally;
};

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}

// mocha tests
module.exports = stringConverter;
