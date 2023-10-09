// this is just some practice finding the keys within an object, both with Object.keys and a for...in loop.

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'};
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'};


function keysInObjectV1(obj) {
  let keys = Object.keys(obj);
  return keys;
};

keysInObjectV1(animals); // => ["dog", "cat", "bison"]
keysInObjectV1(foods); // => ["apple", "lemon", "mango"]



function keysInObjectV2(obj) {
  let keys = [];
  for (key in obj) {
    keys.push(key);
  }
  return keys;
};

keysInObjectV2(animals); // => ["dog", "cat", "bison"]
keysInObjectV2(foods); // => ["apple", "lemon", "mango"]


// mocha tests
module.exports = keysInObject;
