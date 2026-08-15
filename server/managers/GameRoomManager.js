const Deck = require("../models/Deck");

// the purpose of this file is for game logic, so start game will run this this is the game! 

class GameRoomManager {
    constructor(){
        this.deck = new Deck();
        this.deck.shuffle();
        //console.log(this.deck.cards)
    }

    // tryna understand stuff ignore ts
    get randomCard() {
        const randomIndex = Math.floor(Math.random() * this.deck.cards.length);
        const card = this.deck.cards[randomIndex]
        return [card.symbol,card.number]
        //for (let i = 0; i < this.deck.cards.length; i++) {
        //console.log(this.deck.cards[i]);
        //}
    }

     
}

module.exports = GameRoomManager;