const { Server } = require("socket.io");

const io = new Server(3000, {
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on("connection", (socket) => {
    socket.emit("message", "HIIIII");
});

//const Deck = require("./models/Deck");


//const deck = new Deck();
//deck.shuffle();
//console.log(deck.cards);
const GameLogic = require("./managers/GameLogic");
new GameLogic();
