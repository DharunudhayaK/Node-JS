const factorial = (input) => {
  let output = 1;
  for (let out = input; out > 0; out--) {
    output *= out;
  }
  return output;
};

module.exports = factorial;
