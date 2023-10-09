// this function accepts an object, a string, and a numerical value and returns the given object with
// the string arg as an additional key that contains the numerical arg as its value.

function setKeyInObject(obj, string, value) {
  let result = obj;
  result[string] = value;
  return result;
};

// mocha tests
module.exports = setKeyInObject;
