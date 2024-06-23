const http = require("node:http");

http
  .createServer(function (req, res) {
    res.write("welcome to the node s");
    res.write("data handledfdfdffd");
    res.end();
  })
  .listen(8000);
