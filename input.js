
// setup interface to handle user input from stdin

const handleUserInput = function () {
  // \u0003 maps to ctrl+c input

  const stdin = process.stdin;

  process.stdin.on('data', (key) => {
    process.stdout.write('.');
  });


  if (key === '\u0003') {
    process.exit();
  }

};


const setupInput = function () {


  const stdin = process.stdin;
  stdin.on("data", handleUserInput);

  // process.stdin.on('data', (key) => {
  //   process.stdout.write('.');
  // });


  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

module.exports = { setupInput, handleUserInput };