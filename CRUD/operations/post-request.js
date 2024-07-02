const crypto = require("node:crypto");
const convertParse = require("../util/body-parser");
const writeFile = require("../util/write-to-file");

const postReq = async (req, res) => {
  if (req.url === "/moviesData") {
    try {
      var body = await convertParse(req);
      body.id = crypto.randomUUID();
      req.moviesData.push(body);
      writeFile(req.moviesData);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end();
    } catch (err) {
      console.log(err);
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          title: "Validation Failed",
          message: "Request body is not valid",
        })
      );
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
  }
};

module.exports = postReq;
