const events = require("events");

const emitter = new events.EventEmitter();

//using the on method - customEvent
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

//call the custom event
emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's pretty cool huh?", "Wajahat");

