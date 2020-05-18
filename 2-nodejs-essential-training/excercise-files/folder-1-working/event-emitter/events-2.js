const events = require("events");

const emitter = new events.EventEmitter();

//using the on method - customEvent
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input == "exit") {
        emitter.emit("customEvent", "Good Bye!", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
});