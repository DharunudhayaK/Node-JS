const http = require("http");
const portNumber = 5000;

const requestHandler = (request, response) => {
  response.end("im ending my node js server");
};

const server = http.createServer(requestHandler);

server.listen(portNumber, (err) => {
  if (err) {
    return console.log("error occured", err);
  }

  console.log(`server is listening on ${portNumber}`);
});

// console.log("data hanbdledd")
