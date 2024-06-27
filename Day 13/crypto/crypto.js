const crypto = require("node:crypto");

const PASSWORD = "dharun udhaya";

const hashValue = crypto.createHash("sha256").update(PASSWORD).digest("hex");

console.log(hashValue)
