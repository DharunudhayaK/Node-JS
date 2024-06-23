const fs = require("node:fs");

const fileContents = fs.readFileSync("./file.txt", "utf-8");

console.log(fileContents, fs);

fs.readFile("./file.txt", "utf-8", (error, data) => {
  console.log(error ? error + "occured" : data);
});
