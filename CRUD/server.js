const http = require("node:http");
const getReq = require("./operations/get-request");
const postReq = require("./operations/post-request");
const putReq = require("./operations/put.request");
const deleteReq = require("./operations/delete-request");
// require("dotenv").config();

const PORT = process.env.PORT || 8000;
let moviesData = require("./data/movies.json");

const server = http.createServer((req, res) => {
  req.moviesData = moviesData;
  console.log(req.method);
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({ title: "Not Found", message: "Route not found" })
      );
      res.end();
  }
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server running in port : ".concat(PORT));
});
