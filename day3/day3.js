const fs = require("fs");
const data = fs.readFileSync("input.txt", "UTF-8");

console.log(data);

data.split(/\n/).forEach((line) => {
  console.log(line);
});
