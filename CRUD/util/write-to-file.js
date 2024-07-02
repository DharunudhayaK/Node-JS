const fs = require("node:fs");
const path = require("node:path");

const writeFile = (data) => {
  try {
    fs.writeFileSync(
      path.join(__dirname, "..", "data", "movies.json"),
      JSON.stringify(data),
      "utf-8"
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = writeFile;
