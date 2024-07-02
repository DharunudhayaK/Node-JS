const { Buffer } = require("node:buffer");

const bufferFunc = () => {
  let str = "Node js";
  let buffer = Buffer.from(str);
  //   buffer[7] = 0x2a;
  //   return buffer.toString();
  return buffer;
};

console.log("first printing statement");



data = bufferFunc();
module.exports = { data: data };
