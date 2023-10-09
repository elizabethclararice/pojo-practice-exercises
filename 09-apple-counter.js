// this function takes in an object containing a number of keys that have the word 'apple' contained within them,
// and returns the number of keys that contain the string 'apple'.

function appleCounter(appleObj) {
  let appleCounter = 0;

  // isolates all keys, converts them to lowercase, and pushes them to allKeys
  let keys = Object.keys(appleObj);
  let allKeys = [];
  keys.forEach(function(key) {
    allKeys.push(key.toLowerCase())
  });

  // iterates through allKeys, testing them to see if they include 'apple' and incrementing appleCounter if true
  allKeys.forEach(function(key) {
    if (key.includes('apple')) {
      appleCounter++;
    }
  })

  return appleCounter;
};

let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3

// mocha tests
module.exports = appleCounter;
