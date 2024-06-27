const https = require("node:https");

const MAX_CALLS = 1;
const start = Date.now();

for (let out = 0; out < MAX_CALLS; out++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("data", () => {
        console.log("Request : " + out + 1, Date.now() - start);
      });
    })
    .end();
}


setTimeout(() => console.log("first"), 1000)
setTimeout(() => console.log("second"), 0)
setTimeout(() => console.log("third"), 1000)