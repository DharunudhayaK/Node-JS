const fs = require("node:fs");
const path = require("node:path");

const directoryPath = path.join(__dirname, "files");
const filePath = path.join(directoryPath, "file.txt");

if (!fs.existsSync(directoryPath)) {
  fs.mkdir(directoryPath, { recursive: true });
}

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "shgjdhsg");
}

fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

fs.appendFile(filePath, "this is node js", (err) => {
  if (err) {
    console.log(err);
  }
});
// const http = require("node:http");
// const url = require("url");

// const { v4: uuidv4 } = require("uuid");

// const PORT = 5000;

// const todos = [];
// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const pathname = parsedUrl.pathname;

//   if (pathname === "/todos" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(todos));
//   } else if (pathname === "/todos" && req.method === "POST") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       const todo = JSON.parse(body);
//       todo.id = uuidv4();
//       todos.push(todo);
//       res.writeHead(201, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(todo));
//     });
//   } else if (pathname.startsWith("/todos/") && req.method === "PUT") {
//     const id = pathname.split("/")[2];
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });
//     req.on("end", () => {
//       const updatedTodo = JSON.parse(body);
//       todos = todos.map((todo) =>
//         todo.id === id ? { ...todo, ...updatedTodo } : todo
//       );
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "Todo updated" }));
//     });
//   } else if (pathname.startsWith("/todos/") && req.method === "DELETE") {
//     const id = pathname.split("/")[2];
//     todos = todos.filter((todo) => todo.id !== id);
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Todo deleted" }));
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Not Found");
//   }
// });

// server.listen(PORT, function (err) {
//   if (err) console.log(err);
//   console.log("Server running succesfull");
// });

const factorial = require("./js-files/fact");
console.log(factorial(5));

const inputFile = path.join(__dirname, "input.txt");
const outputFile = path.join(__dirname, "output.txt");

const readable = fs.createReadStream(inputFile);

const writable = fs.createWriteStream(outputFile);

readable.pipe(writable);

readable.on("open", () => {
  console.log(`Reading from ${inputFile}...`);
});

writable.on("finish", () => {
  console.log(`Write completed to ${outputFile}.`);
});

writable.on("error", (err) => {
  console.error(`Write error: ${err}`);
});
