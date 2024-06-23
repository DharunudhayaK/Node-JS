import { readFile, writeFile } from "fs";

readFile("./file.txt", "utf-8", (e, data) => {
  console.log(e ? e + "occured" : data);
});

writeFile("./write.txt", "I've written the node js content", (err, data) => {
  if (err) {
    throw new err();
  }
  console.log(data);
});

process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});
