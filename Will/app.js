import players from './playerData.js'

const player1CardDisplayArea = document.getElementById("player-1-card-area")
const player2CardDisplayArea = document.getElementById("player-2-card-area")
const nextPlayer = document.getElementById("nextPlayer")

// Create the decks ( shallow copy so we dont mutate the data )
const deck = [...players]
const playerOne = []
const playerTwo = []

// Generate a random card index
const getRandomNumber = () => {
    return Math.floor(Math.random() * deck.length)
};

// Display a card
const createCard = (item, player) => {
    player.innerHTML = `
        <div class="player">
            <img src="${item.img}" alt="${item.name}">
            <p>
                ${item.name}
                <br>${item.caps} caps
                <br>${item.international_tries} International Tries
                <br>Year of Birth: ${item.year_born}
            </p>
        </div>
    `
}

// Randomly deal all cards between the two players, this will run on page load so no button needed!!
while (deck.length > 0) {

    const card = deck.splice(getRandomNumber(), 1)[0]

    if (playerOne.length <= playerTwo.length) {
        playerOne.push(card)
    } else {
        playerTwo.push(card)
    }
}

// Show the next card for each player
const showNextCards = () => {

    if (playerOne.length === 0 || playerTwo.length === 0) {
        console.log("No more cards!")
        return
    }

    const playerOneCard = playerOne.shift()
    const playerTwoCard = playerTwo.shift()

    createCard(playerOneCard, player1CardDisplayArea)
    createCard(playerTwoCard, player2CardDisplayArea)
};

// Display the first cards when the game starts
showNextCards()

// Move to the next cards when the button is clicked
nextPlayer.addEventListener("click", showNextCards)

console.log("Player One Deck: ", playerOne)
console.log("Player Two Deck: ", playerTwo)
