const { emittedEvents } = require("./capturedEvents");

const EventEmitter = require("node:events");

const eventEmitter = new EventEmitter();

eventEmitter.on("emitting", async (data) => {
  console.log(data);
  await emittedEvents(data);
});

eventEmitter.emit("emitting", "This is Udhaya");
