const fs = require("node:fs");
const path = require("node:path");

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 10,
});
// here we can use the createWriteStream(path.join(__dirname, ...filename)) for both read and write stream
let writeableStream;
if (fs.existsSync("./anotherWrite.txt")) {
  writeableStream = fs.createWriteStream("./anotherWrite.txt");
}

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writeableStream.write(chunk);
});

// readableStream.pipe(writeableStream)
