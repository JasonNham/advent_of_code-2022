const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf-8"); // first time running a readFile with utf-8 instead of method chaining toString()

// Set values of strings played to 2D array index values.
const rps = {
  // ROCK
  A: 0,
  X: 0,
  // PAPER
  B: 1,
  Y: 1,
  // SCISSORS
  C: 2,
  Z: 2,
};

// use this array to award my points for play.
const points = [1, 2, 3];

// use the rps array values to call the 2D array to calculate the score.
const score = [
  [3, 6, 0],
  [0, 3, 6],
  [6, 0, 3],
];

let res = 0;

data.split(/\n/).forEach((line) => {
  let opponent = line.split(" ")[0];
  let me = line.split(" ")[1];

  res += score[rps[opponent]][rps[me]] + points[rps[me]];
});

console.log("Part 1 Points:", res);

const part2Me = [
  ["C", "A", "B"],
  ["A", "B", "C"],
  ["B", "C", "A"],
];

res = 0;
data.split(/\n/).forEach((line) => {
  let opponent = line.split(" ")[0];
  let me = line.split(" ")[1];

  const adjustedMe = part2Me[rps[opponent]][rps[me]];
  res += score[rps[opponent]][rps[adjustedMe]] + points[rps[adjustedMe]];
});

console.log("Part 2 Points:", res);

// ==============================================
