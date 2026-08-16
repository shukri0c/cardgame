const Deck = require("../models/Deck");

// the purpose of this file is for game logic, so start game will run this this is the game! 

class GameLogic {
    constructor(deck){
        this.deck = new Deck();
        this.deck.shuffle();
        this.giveCards();
    }
    
    // ill keep it at 4 players, something to implement later on is choosing the amount of players 
    
    // once a player has 4 of the same card its added to their score
    
    players = [1,2,3,4];
    giveCards(){
        const firstHand = {};
        for(const player of this.players)
        {
            firstHand[player] = [];
            for (let i = 0; i < 5; i++) {
                firstHand[player].push(this.deck.drawCard());
            }
    
        }
        console.log(firstHand)
    }
    

}


module.exports = GameLogic;