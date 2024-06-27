const http = require("http");
const PORT = 7000;
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  try {
    if (req.url.startsWith("/css")) {
      fs.readFile(path.join(__dirname, req.url), (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end("CSS file not found");
        } else {
          res.writeHead(200, { "Content-Type": "text/css" });
          res.end(data);
        }
      });
      return;
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.write(data);
          res.end();
        }
      });
    }
  } catch (err) {
    console.log(err + "error occured");
  }
});

server.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running");
  }
});

// -------------------- excution stage sync and async ----------------
// console.log("1");
// fs.readFile(__filename, () => {
//   console.log("2");
// });
// fs.readFile(__filename, () => {
//   console.log("3");
// });
// console.log("4");

// console.log("data handled");

// ------------here nextTick take always first priority ahead of promsie callback--------------------
Promise.resolve().then(() => {
  console.log("1");
});
process.nextTick(() => console.log("2"));

const printFiveMoves = async (name) => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/".concat(name)
  );
  const jsonRes = await response.json();
  const moves = jsonRes["moves"].map(({ move }) => move.name);
  console.log(moves);
};

console.log(printFiveMoves("charmander"));
