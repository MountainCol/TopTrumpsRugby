import players from './playerData.js'

const player1CardDisplayArea = document.getElementById("player-1-card-area")
const player2CardDisplayArea = document.getElementById("player-2-card-area")
const nextPlayer = document.getElementById("nextPlayer")
const internationalTries = document.getElementById("internationalTries")
const yearBorn = document.getElementById("yearBorn")
const internationalCaps = document.getElementById("internationalCaps")

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

    console.log(playerOne, playerTwo)
}

const showCard = () => {
    createCard(playerOne[0], player1CardDisplayArea)
    createCard(playerTwo[0], player2CardDisplayArea)
}

const moveCard = (winner) => {
    if (winner === 1) {
        console.log('Player 1 wins, moving card to deck')
        playerOne.push(playerTwo.shift())
        console.log(playerOne)
        console.log(playerTwo)
    } else {
        console.log('Player 2 wins, moving card to deck')
        playerTwo.push(playerOne.shift())
        console.log(playerOne)
        console.log(playerTwo)
    }
}

const intCapsFunction = () => {
    if(playerOne[0].caps > playerTwo[0].caps){
        console.log('Player 1 wins', [0])
        moveCard(1)
    } else {
        console.log('Player 2 wins', [0])
        moveCard(2)
    }
}

const intTriesFunction = () => {
    if (playerOne[0].caps > playerTwo[0].international_tries){
        console.log('player 1 wins')
        moveCard(1)
    } else {
        console.log('player 2 wins')
        moveCard(2)
    }
}

const yearBornFunction = () => {
    if(playerOne[0].caps > playerTwo[0].year_born){
        console.log('Player 1 wins')
        moveCard(1)
    } else {
        console.log('Player 2 wins')
        moveCard(2)
    }
}

// Display the first cards when the game starts
showCard()

// Move to the next cards when the button is clicked
internationalTries.addEventListener("click", intTriesFunction)
internationalCaps.addEventListener("click", intCapsFunction)
yearBorn.addEventListener("click", yearBornFunction)

console.log("Player One Deck: ", playerOne)
console.log("Player Two Deck: ", playerTwo)













// function compareCards(stats) {

//     const playerOneInternationalTries = pOneStat[0][stats]
//     const playerOneInternationalCaps = pOneStat[0][stats]
//     const playerOneYearBorn = pOneStat[0][stats]

//     const playerTwoInternationalTries = pTwoStat[0][stats]
//     const playerTwoInternationalCaps = pTwoStat[0][stats]
//     const playerTwoYearBorn = pTwoStat[0][stats]

//     if(pOneStat > pTwoStat) {
//         roundOutcome("p1-win")
//     } else if (pTwoStat > pOneStat); {  
//         roundOutcome("p2-win");
//     };
// }
// console.log(roundOutCome)

// function roundOutcome(outcome)
// const isP1Win = outcome === "p1Win"
// const isP2Win = outcome === "p2Win"
// con
// if(p1Win){
//     p1Score+=1;
//     p1ScoreDisplay.textContent = `Player 1 score: ${}
// }