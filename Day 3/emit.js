const EventEmitter = require("node:events")

const emitter = new EventEmitter()

emitter.on("triggering the event",() => {
    console.log(`event triggered`)
})

emitter.emit("trigger the events")