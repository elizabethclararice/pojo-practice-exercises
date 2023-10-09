// this is just some practice finding the values within an object, using both Object.values and a for...in loop.

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}


function valuesInObjectV1(obj) {
  let values = Object.values(obj);
  return values;
};

valuesInObjectV1(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObjectV1(foods); // => ["tart", "sour", "sweet"]



function valuesInObjectV2(obj) {
  let values = [];

  for (let key in obj) {
    values.push(obj[key]);
  }

  return values;
};

valuesInObjectV2(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObjectV2(foods); // => ["tart", "sour", "sweet"]



// mocha tests
module.exports = valuesInObject;
