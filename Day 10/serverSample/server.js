const http = require("node:http");
const portNumber = 5000;

const obj = {
  id: "1",
  data: "node js",
};

const createServer = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(obj));
    console.log("server running");
  })
  .listen(portNumber, () => {
    console.log(`server is running on ${portNumber}`);
  });

// createServer.listen(portNumber, (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(data);
//   }
// });
