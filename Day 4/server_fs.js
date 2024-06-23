const http = require("http");
const fs = require("fs");
const portNum = 7000;

http
  .createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("index.html", function (err, data) {
      if (err) {
        res.writeHead(404);
        res.write("Error was ocurred happening");
      } else {
        res.write(data);
      }
      res.end();
    });
  })
  .listen(portNum, function (err) {
    if (err) {
      console.log("Error occured", err);
    } else {
      console.log("Everything working normal");
    }
  });
