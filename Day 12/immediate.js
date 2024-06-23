const fs = require('fs');

// Timer with setTimeout
setTimeout(() => {
  console.log('setTimeout');
}, 0);

// Immediate with setImmediate
setImmediate(() => {
  console.log('setImmediate');
});

// I/O operation with fs.readFile
fs.readFile(__filename, () => {
  console.log('I/O Callback');
  
  // Nested setImmediate within I/O callback
  setImmediate(() => {
    console.log('setImmediate within I/O');
  });
  
  // Nested setTimeout within I/O callback
  setTimeout(() => {
    console.log('setTimeout within I/O');
  }, 0);

  // process.nextTick within I/O callback
  process.nextTick(() => {
    console.log('process.nextTick within I/O');
  });
});

// process.nextTick
process.nextTick(() => {
  console.log('process.nextTick');
});

console.log('Sync Code Execution');
