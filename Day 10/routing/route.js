const http = require("node:http");
const port = 7007;

const serverRoute = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Root Page");
  } else if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        id: "1",
        description: "data manipulation going on",
      })
    );
  } else {
    res.end("Page not found");
  }
});

serverRoute.listen(port, () => {
  console.log("server running in local machine");
});
