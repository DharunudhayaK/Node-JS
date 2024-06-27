const fs = require("node:fs");
const path = require("node:path");

const fsPromises = require("node:fs/promises");

async function callFunc(url, method) {
  try {
    if (!fs.existsSync(path.join(__dirname, "call"))) {
      await fsPromises.mkdir(path.join(__dirname, "call"));
    }
    await fsPromises.appendFile(path.join(__dirname, "call", method));
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  callFunc,
};
