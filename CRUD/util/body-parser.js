async function convertParse(request) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      request.on("data", (chunk) => {
        body += chunk;
      });
      request.on("end", function (err) {
        if (body) {
          try {
            resolve(JSON.parse(body));
          } catch (jsonErr) {
            reject(new SyntaxError(jsonErr));
          }
        }
      });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = convertParse;
