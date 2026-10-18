const p1Cards = [];
const p2Cards = [];

let p1Score = 0;
let p2Score = 0;

const p1Current =[];
const p2Current = [];

// async function loadData() {
//     const response = await fetch("./players.json")
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(post => {
//             <li> post.title </li>
//         })
//     });
// }

function shuffle(players) {
    const deckLength  = players.length;
    let p1CardCount = 0;
    let p2CardCount = 0;

    for(let i = deckLength; i > 0; i--) {
        let cardIdx = Math.floor(Math.random() * i );
        let randomisedCard = players.splice(cardIdx, 1);

        if(p1CardCount > p2CardCount) {
            p2Cards.push(randomisedCard[0]);
            p2CardCount +=1;
        } else if(p1CardCount === p2CardCount) {
            p1Cards.push(randomisedCard[0]);
            p1CardCount +=1;
        }
    }
}
function compareStat(stat){
    const p1Stat = p1Current[0][stat];
    const p2Stat = p2Current[0][stat];

    switch(stat) {
        case "year_born":
        case "caps":
        case "international_tries":
            if (p1Stat > p2Stat) {
                roundOutcome("p1-win");
            } else if (p2Stat > p1Stat){
                roundOutcome("p2-win");
            } else {
                roundOutcome("stalemate");
            }
        break;
    }
}

// to find the outcome from game playand show scoring increase //
function roundOutcome(outcome) {
    const isP1Win = outcome === "p1-win";
    const isP2Win = outcome === "p2-win";

    if(isP1Win) {
        p1Score+=1;
        p1ScoreDisplay.textContent = `Player one score: ${p1Score}`;

        p1Cards.push(p2Current.splice(0,1)[0]);
        p2Cards.push(p1Current.splice(0,1)[0]);
    } else if (isP2Win){
        p2Score+=1;
        p2ScoreDisplay.textContent = `player two score: ${p2Score}`;

        p2Cards.push(p1Current.splice(0,1)[0]);
        p2Cards.push(p2Current.splice(0,1)[0]);
    } else {
        p1Cards.push(p1Current.splice(0,1)[0]);
        p2Cards.push(p2Current.splice(0,1)[0]);
    }

    const winnertText = isP1Win ? "one" : "two";
    const tieMessage = "This round is a tie!";
    const winnerMessage = `player ${winnerText} wins the round!`;

    if(isP1Win || isP2Win) {
        msgDisplay.textContent = winnerMessage;
    } else {
        msgDisplay.textContent = tieMessage;
    }
    resetMsgDisplay();

    setTimeout( () => {msgDisplay.style.display = "none"}, 2000);
    playGame() 
}


const resetMsgDisplay = () => msgDisplay.style.display = "inline-block";

function playGame() {
    if(p1Cards.length < 10 && p2Cards.length <210){
        currentCard();
        return
    }

    const isP1Win = p1Card.length === 10;
    const isP2Win = p2Card.length === 10;
    const winnerText = isP1Win ? "one" : "two";
    const winnerMessage = `Player ${winnerTExt} wins the game`;

    if (isP1Win || isP2Win){
        msgDisplay.textContent = winnerMessage;
    }
}

function currentCard() {
    const p1 = Math.floor((Math.random() * p1Cards.length));
    const p2 = Math.floor((Math.random() * p2Cards.length));

    p1Current.push(p1Cards.splice(p1, 1)[0]);
    p2Current.push(p2Cards.splice(p2, 1)[0]);
}

async function loadData() {
    const response = await fetch("players");

    if (!response.ok) {
        throw new Error("Could not load data.");
    }

    return response.json();
}


// Used like so
const players = [
            {
            "name": "Cortez Ratima",
            "year_born": 2001,
            "caps": 24,
            "international_tries": 2,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/C_Ratima.png"
            },
            {
            "name": "Tyrel Lomax",
            "year_born": 1996,
            "caps": 55,
            "international_tries": 0,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/T_Lomax.png"
            },
            {
            "name": "Ethan De Groot",
            "year_born": 1998,
            "caps": 46,
            "international_tries": 5,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/E_DeGroot.png"
            },
            {
            "name": "Codie Taylor",
            "year_born": 1991,
            "caps": 113,
            "international_tries": 25,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/C_Taylor.png"
            },
            {
            "name": "Josh Lord",
            "year_born": 2001,
            "caps": 18,
            "international_tries": 0,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/J_Lord.png"
            },
            {
            "name": "Luke Jacobson",
            "year_born": 1997,
            "caps": 30,
            "international_tries": 6,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/L_Jacobson.png"
            },
            {
            "name": "Ardie Savea",
            "year_born": 1993,
            "caps": 112,
            "international_tries": 35,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/A_Savea.png"
            },
            {
            "name": "Cameron Roigard",
            "year_born": 2000,
            "caps": 25,
            "international_tries": 17,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/C_Roigard.png"
            },
            {
            "name": "Ruben Love",
            "year_born": 2001,
            "caps": 11,
            "international_tries": 3,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/R_Love.png"
            },
            {
            "name": "Jordie Barrett",
            "year_born": 1997,
            "caps": 86,
            "international_tries": 26,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/J_Barrett.png"
            },
            {
            "name": "Will Jordan",
            "year_born": 1998,
            "caps": 62,
            "international_tries": 56,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/W_Jordan"
            },
            {
            "name": "Damian McKenzie",
            "year_born": 1995,
            "caps": 82,
            "international_tries": 24,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/D_McKEnzie",
            },
            {
            "name": "Tupou Vaa'i",
            "year_born": 2000,
            "caps": 52,
            "international_tries": 7,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/T_Vaa'i",
            },
            {
            "name": "Billy Proctor",
            "year_born": 1999,
            "caps": 13,
            "international_tries": 3,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/B_Proctor",
            },
            {
            "name": "Wallace Sititi",
            "year_born": 2002,
            "caps": 24,
            "international_tries": 1,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/W_Sititi",
            },
            {
            "name": "Xavier Numia",
            "year_born": 1998,
            "caps": 5,
            "international_tries": 0,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/X_Numia",
            },
            {
            "name": "Asafo Aumua",
            "year_born": 1997,
            "caps": 27,
            "international_tries": 3,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/A_Aumua",
            },
            {
            "name": "Fletcher Newell",
            "year_born": 2000,
            "caps": 42,
            "international_tries": 2,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/F_Newell",

            },
            {
            "name": "Sam Darry",
            "year_born": 2000,
            "caps": 12,
            "international_tries": 2,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/S_Darry",

            },
            {
            "name": "Peter Lakai",
            "year_born": 2003,
            "caps": 15,
            "international_tries": 3,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/P_Lakai",

            },
            {
            "name": "Caleb Clarke",
            "year_born": 1999,
            "caps": 35,
            "international_tries": 16,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/C_Clarke"

            },
            {
            "name": "Quinn Tupaea",
            "year_born": 1999,
            "caps": 30,
            "international_tries": 5,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/Q_Tupaea",

            },
            {
            "name": "Josh Moorby",
            "year_born": 1998,
            "caps": 6,
            "international_tries": 2,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/J_Moorby",

            },
            {
            "name": "Anton Lienert-Brown",
            "year_born": 1995,
            "caps": 94,
            "international_tries": 17,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/A_Lienert-Brown",

            },
            {
            "name": "Anton Segner",
            "year_born": 2001,
            "caps": 3,
            "international_tries": 0,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/A_Segner",

            },
            {
            "name": "Samisoni Taukei'aho",
            "year_born": 1997,
            "caps": 45,
            "international_tries": 14,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/S_Taukei'aho",

            },
            {
            "name": "Leroy Carter",
            "year_born": 1999,
            "caps": 11,
            "international_tries": 5,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/L_Carter",

            },
            {
            "name": "Patrick Tuipulotu",
            "year_born": 1993,
            "caps": 60,
            "international_tries": 8,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/P_Tuipulotu",

            },
            {
            "name": "Fehi Fineanganofo",
            "year_born": 2002,
            "caps": 1,
            "international_tries": 0,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null, 
            "img": "./images/F_Fineanganofo",

            },
            {
            "name": "Jamie Hannah",
            "year_born": 2002,
            "caps": 1,
            "international_tries": 0,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null,
            "img": "./images/J_HAnnah",

            },
            {
            "name": "Pasilio Tosi",
            "year_born": 1998,
            "caps": 18,
            "international_tries": 1,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null, 
            "img": "./images/P_Tosi",

            },
            {
            "name": "George Bower",
            "year_born": 1992,
            "caps": 30,
            "international_tries": 1,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null, 
            "img": "./images/G_Bower",

            }
        ];

shuffle(players);
currentCard();

console.log(p1Current[0].name);
console.log(p1Current[0]);


console.log(p2Current[0].name);
console.log(p2Current[0]);

players.map(getNameCaps);

function getNameCaps(item) {
    return [item.name, item.caps].join( " ");


}

document.getElementById("demo").innerHTML = players.map(getPlayer).join("");

function getPlayer(item) {
    return `
        <div class="player">
        <img src="${item.img}" alt="${item.name}">
            <p>${item.name} <br> ${item.caps} caps 
            <br>${item.international_tries}  International Tries
            <br> Year of Birth : ${item.year_born} </p>
        </div>
            `;
        }