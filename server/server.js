const { Server } = require("socket.io");

const io = new Server(3000, {
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on("connection", (socket) => {
    socket.emit("message", "HIIIII");
});