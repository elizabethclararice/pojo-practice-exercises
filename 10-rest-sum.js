// this function simply accepts all incoming arguments using rest syntax and sums them.

function restSum(...otherNums) {
  let total = null;

  otherNums.forEach(function(num) {
    total += num;
  });

  return total;
};

restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
restSum(0); // => 0

// mocha tests
module.exports = restSum;
