const syncFile = require("node:fs");

const fileContents = syncFile.readFileSync("./file.txt", "utf-8");

// console.log(fileContents)

syncFile.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("some error occurs : ", err);
  } else {
    console.log("imported data console in terminal who's that", data);
  }
});
