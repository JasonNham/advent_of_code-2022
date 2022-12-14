const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf-8");

let elves = [];
let cals = 0;
data.split(/\n/).forEach((line) => {
  if (line != "") {
    cals += parseInt(line);
  } else {
    elves.push(cals);
    cals = 0;
  }
});
elves.sort((a, b) => b - a);
console.log("Part 1: " + elves[0]);
console.log("Part 2: " + (elves[0] + elves[1] + elves[2]));
