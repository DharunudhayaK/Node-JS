const fs = require("node:fs");
const path = require("node:path");

if (fs.existsSync("./newFolder")) {
  fs.rmdir("./newFolder", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder created");
    }
  });
}

if (fs.existsSync("./newFolder")) {
  fs.mkdir("./newFolder", (err) => {
    if (err) throw err;
    console.log("file created");
  });
}

if (!fs.existsSync("./file.txt")) {
  fs.createWriteStream(path.join(__dirname, "./file.txt"), {
    encoding: "utf-8",
  });
}
