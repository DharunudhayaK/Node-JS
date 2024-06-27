const fs = require("node:fs/promises");
const path = require("node:path");

fs.readFile(path.join(__dirname, "file.txt"), "utf-8", (err, data) => {
  //   console.log(err ? err + "occured" : data);
  fs.appendFile(
    path.join(__dirname, "anotherWrite.txt"),
    "\n I've updated my node js code",
    (err) => {
      console.log(err);
      console.log("text appened in anotherWrite file");
    }
  );
});

fs.writeFile(
  path.join(__dirname, "anotherWrite.txt"),
  "I've written the node js query",
  (err) => {
    console.log(err);
    console.log("write completed");
  }
);

async function readFiles() {
  try {
    const data = await fs.readFile("file.txt", 'utf-8');
    console.log(data, "using promises");
  } catch (err) {
    console.log(err);
  }
}

readFiles();


