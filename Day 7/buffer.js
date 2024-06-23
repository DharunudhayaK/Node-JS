// const buffer = new Buffer.from("node js")

// console.log(buffer.toJSON())

// console.log(buffer.toString())

// console.log(buffer)

const { Buffer } = require('node:buffer');

const buf = Buffer.alloc(5);

console.log(buf);