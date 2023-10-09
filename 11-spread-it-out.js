// as a simple exercise in spread syntax, this function simply accepts two arrays and returns
// a single array containing the values of both

function spreadItOut(array1, array2) {
  let spreadArray = [ ...array1, ...array2 ];
  return spreadArray;
};

spreadItOut([3,5,6], [1,2,3]); // => [3,5,6,1,2,3];
spreadItOut([], [1,2,3]); // => [1,2,3];
spreadItOut(["apple", "banana"], [1,2,3]); // => ["apple", "banana", 1, 2, 3];

// mocha tests
module.exports = spreadItOut;
