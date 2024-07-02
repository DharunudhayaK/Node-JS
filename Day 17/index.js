// const { CustomError } = require("./customError");

// console.log(new CustomError("This is Custom Error"));
// // throw new CustomError("New Error Ocuured");

// try{
//     func()
// } catch(e){
//     console.log(e)
// }

// Uncaught Exceptions

function sample() {
  const data = fetch("localhost:300");
  return data;
}

// process.on("uncaughtException", (err) => {
//   console.log("uncaught error" + err);
//   process.exit(1);
// });

// const promise = new Promise((resolve, reject) => {
//   !true ? resolve(sample()) : reject(sample());
// });

// promise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((er) => console.log(er));

// Exceptions with async and await

const someFunction = async () => {
  try {
    await sample();
  } catch (error) {
    console.log(error);
  }
};
someFunction();
