import { readFileSync } from "node:fs";

var fs = require("fs");

// let URL = "input.txt";
// try {
//   let response = await axios.get(URL);
//   let to_return = await response.data;
//   console.log(to_return);
// } catch (err) {
//   console.log("Err");
// }
let data;

try {
  data = fs.readFileSync("input.txt", "utf8");
} catch (e) {
  console.log("Error:", e.stack);
}

console.log(data[0]);
// fetch("input.txt")
//   .then((response) => response.text())
//   .then((data) => {
//     readData += data;
//     console.log(readData);
//   });
