const Deck = require("../models/Deck");

// the purpose of this file is for game logic, so start game will run this this is the game! 

class GameLogic {
    constructor(deck){
        this.deck = new Deck();
        this.deck.shuffle();
        //console.log(this.deck.cards)
    }

    //i need a way to know how many players there are i think for simplicity ill keep it two players
    // when i am done with the project i can consider making it more players
    players = [player1, player2]


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

module.exports = GameLogic;