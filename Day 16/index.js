const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");
const fsPromise = require("node:fs/promises");
const { data } = require("./buffers/buffer");
console.log(data);
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/pain" });
    res.end("Hello World");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(PORT, function (err) {
  if (err) {
    console.log("error occured" + err);
  } else {
    console.log("Server Running Successfully ".concat(PORT));
  }
});

if (!fs.existsSync("input.txt")) {
  fs.writeFile("input.txt", "this is my file ive created", function (err) {
    console.log(err ? "error occured" : "file created");
  });
}

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("sorry unexpected error occured");
  } else {
    if (!fs.existsSync("output.txt")) {
      fs.writeFile("output.txt", data, function (err) {
        if (err) throw err;
        console.log("input file text has been passed to output file");
      });
    }
  }
});
// console.log(getFileText)

const filePath = path.join(__dirname, "input.txt");

async function fetchTextFile() {
  try {
    const file = await fsPromise.readFile(filePath, "utf-8");
    console.log("Promise File : ".concat(file));
  } catch (err) {
    console.log(err);
  }
}

fetchTextFile();
