const getReq = (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/")[2];
  const regexUUIDv4 = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  );
  if (req.url === "/moviesData") {
    (res.statusCode = 200), res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.moviesData));
  } else if (!regexUUIDv4.test(id)) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        title: "ID Failed",
        message: "UUID is not found",
      })
    );
  } else if (regexUUIDv4.test(id)) {
    (res.statusCode = 200), res.setHeader("Content-Type", "application/json");
    let filterdData = req.moviesData.filter((item) => item?.id === id);
    if (Boolean(filterdData?.length)) {
      res.statusCode = 200;
      res.write(JSON.stringify(filterdData));
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end({ title: "Not Found", message: "Movies Data not found" });
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
  }
};

module.exports = getReq;
