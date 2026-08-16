const Deck = require("../models/Deck");

// the purpose of this file is for game logic, so start game will run this this is the game! 

class GameLogic {
    constructor(deck){
        this.deck = new Deck();
        this.giveCards();
        this.game();
        this.end = false;
    }
    
    // ill keep it at 4 players, something to implement later on is choosing the amount of players 
    
    // once a player has 4 of the same card its added to their score
    
    players = [
        { name: 'player1', hand: [] },
        { name: 'player2', hand: [] },
        { name: 'player3', hand: [] },
        { name: 'player4', hand: [] }
    ];
    // yeah atm since its in terminal everyone can see ur cards lmao... 
    giveCards() {
        for (const player of this.players) {
            for (let i = 0; i < 5; i++) {
                player.hand.push(this.deck.drawCard());
            }
        }
        console.log(this.players)
    }
    
    
    game(){
        let currentPlayer = 0;
        this.endGame()
        //if (this.end) {
            // ill add some code in here that will add up the books and calculate score, acc another function should do that tbh create a calc score func
            //console.log("end game")
            //return;
        //}
        // while game hasnt ended 
        if(!this.end)
        {
            console.log("it is " + (this.players[currentPlayer]) + " turn!")
            currentPlayer = (currentPlayer + 1) % this.players.length;
            this.takeTurn();
        }
        


    }

    takeTurn(){
        const readline = require("readline");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Which player do you want to ask? ", (playerIndex) => {
            rl.question("Which card do you want? ", (card) => {
                if (this.players[playerIndex].hand.some(card => card.number === 7))
                {
                    console.log('gimmie ur card')
                }

                rl.close();
            });
        });

        const player = this.players[this.currentPlayer];

    }
    endTurn(){

    }
    endGame(){
        if (this.players[0].hand === 0 && this.players[1].hand === 0 && this.players[2].hand === 0 && this.players[3].hand > 0 && this.deck.numberOfCards && this.deck.numberOfCards === 0 ) 
            {
                this.end = true;
            }
    }
    

}


module.exports = GameLogic;