const path = require("path");
const { add, arr } = require("./Sample");

console.log(add(1, 2), arr([]));

// import { add, arr } from "./Sample";

// console.log(add(234567, 34567), arr(["shffj", "dfgh", "srtwe"]));

console.log(path.parse(__filename));
console.log(path.parse(__dirname));

console.log(path.format(path.parse(__dirname)));

console.log(path.extname(__filename));
