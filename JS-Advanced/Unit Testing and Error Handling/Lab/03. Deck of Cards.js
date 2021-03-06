function printDeckOfCards(cards) {

    let result = [];

    for (let card of cards) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);
        try {
            result.push(createCard(face, suit));
        } catch (err) {
            console.log(`Invalid card: ` + card);
            return;
        }
    }

    console.log(result.join(` `));

    console.log(cards.map(card => {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);
        try {
            createCard(face, suit);
        } catch {

        }
    }).join(` `));


    function createCard(face, suit) {

        const faces = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`];

        const suits = {
            S: `\u2660`,
            H: `\u2665`,
            D: `\u2666`,
            C: `\u2663`,
        }

        if (!Object.keys(suits).includes(suit)) {
            throw new Error `Error`;
        }

        if (!faces.includes(face)) {
            throw new Error `Error`;
        }

        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }

}

printDeckOfCards(['AS', '10D', 'KH', '22'])