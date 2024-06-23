const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("emitting events", (msg1, msg2) => {
  console.log(msg1, msg2);
});

emitter.emit("emitting events", { id: "dfdjfh" }, "Node js");
