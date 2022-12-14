const fs = require("fs");
let input = fs.readFileSync("input.txt", "UTF-8");

function isUnique(str) {
  return new Set(str).size == str.length;
}

function day6(string, marker, size) {
  if (!isUnique(string.substring(0, size))) {
    return day6(string.substring(1, string.length), marker + 1, size);
  }
  //   return marker;
  console.log("The answer is: " + marker);
}
day6(input, 4, 4);
day6(input, 14, 14);
