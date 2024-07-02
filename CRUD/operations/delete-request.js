const writeFile = require("../util/write-to-file");

const deleteReq = (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/")[2];
  const regexUUIDv4 =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (baseUrl === "/moviesData/") {
    if (!regexUUIDv4.test(id)) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          title: "ID Failed",
          message: "UUID is not valid",
        })
      );
      return;
    }

    const filteredItem = req.moviesData.filter((movie) => movie.id !== id);
    if (!filteredItem.length) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          title: "Not Found",
          message: "Movies Data not found",
        })
      );
    } else {
      try {
        req.moviesData = filteredItem;
        writeFile(filteredItem);
        res.statusCode = 204;
        res.setHeader("Content-Type", "application/json");
        res.end();
      } catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            title: "Internal Server Error",
            message: "Failed to write data",
            error: err.message,
          })
        );
      }
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        title: "Not Found",
        message: "Invalid endpoint",
      })
    );
  }
};

module.exports = deleteReq;
