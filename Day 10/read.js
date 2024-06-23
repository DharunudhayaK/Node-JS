const fs = require("node:fs");
const path = require("node:path");

const sampleRead = fs.createReadStream(
  path.join(__dirname, "textFiles", "file.txt"),
  {
    encoding: "utf-8",
  }
);

let sampleWriteStream;
if (!fs.existsSync("./copied.txt")) {
  console.log("File created");
  sampleWriteStream = fs.createWriteStream(path.join(__dirname, "copied.txt"), {
    encoding: "utf-8",
  });
} else {
  console.log("Already file existed");
}

sampleRead.on("data", (chunk) => {
  console.log(chunk + "chunk data");
  if (sampleWriteStream) {
    sampleWriteStream.write(chunk);
  }
});

sampleRead.on("end", function () {
  if (sampleWriteStream) {
    sampleWriteStream.end();
  }
});
