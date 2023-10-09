// this function takes in an array of score objects/people as its input, which tracked each turn of a game.
// it returns an object containing key value pairs listing each person who scored as the key
// and the sum of their total points for the game as their value, tracked across each of that person's turns.

function countScores(people) {
  let tally = {};

  people.forEach(function(entry) {
    // isolates each name and score
    let name = entry.name;
    let score = entry.score;

    // if a tally for that name doesn't exist yet, creates one and sets it to the corresponding score
    if (tally[name] === undefined) {
      tally[name] = score;

    // if a tally already exists, it sums the existing score with the score found in the new entry
    } else {
      tally[name] += score;
    }
  });

  return tally;
};

let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }

// mocha tests
module.exports = countScores;
