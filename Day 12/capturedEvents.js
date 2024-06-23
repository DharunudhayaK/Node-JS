const fs = require("node:fs");
const fsPromise = require("node:fs").promises;
const path = require("node:path");

async function emittedEvents(msg) {
  try {
    if (!Boolean(fs.existsSync(path.join(__dirname, "emitter")))) {
      await fsPromise.mkdir(path.join(__dirname, "emitter"));
    }
    await fsPromise.writeFile(
      path.join(__dirname, "emitter", "emitterText.txt"),
      msg
    );
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  emittedEvents,
};
