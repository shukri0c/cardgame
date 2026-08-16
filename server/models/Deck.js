const Card = require("./Card");

class Deck {
    constructor(cards) {
        this.cards = [];
        this.createDeck();
        this.drawCard();
        this.shuffle();
    }

    createDeck(){
        const symbols = ["spade", "heart", "diamond", "clove"];
        const numbers = [1,2,3,4,5,6,7,8,9,10,"J","Q","K"];

        for (const symbol of symbols) {
            for (const number of numbers) {
                this.cards.push(new Card(number, symbol));
            }
        }
    }

    drawCard(){
        return this.cards.pop();
    }
    // i feel like drawCard is a logic and shouldnt be here. im not sure
    
    // returns how many cards are in the deck
    get numberOfCards() {
        return this.cards.length
    }

    shuffle(){
        // this is suppsoed to be a perfect shuffle
        for (let i = this.numberOfCards - 1; i > 0; i--)
        {
            const newIndex = Math.floor(Math.random() * (i+1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
    
}

module.exports = Deck;