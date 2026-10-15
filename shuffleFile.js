// Source - https://stackoverflow.com/a/2450976
// Posted by ChristopheD, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-14, License - CC BY-SA 4.0

// function shuffle(players) {
//     let currentIndex = players.length;

//   // While there remain elements to shuffle...
//     while (currentIndex != 1) {

//     // Pick a remaining element...
//     const randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [players[currentIndex], players[randomIndex]] = [
//         players[randomIndex], players[currentIndex]];
//     } 
// }

const p1Cards = [];
const p2Cards = [];

let p1Score = 0;
let p2Score = 0;

const p1Current =[];
const p2Current = [];



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

function currentCard() {
    const p1 = Math.floor((Math.random() * p1Cards.length));
    const p2 = Math.floor((Math.random() * p2Cards.length));

    p1Current.push(p1Cards.splice(p1, 1)[0]);
    p2Current.push(p2Cards.splice(p2, 1)[0]);
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
            "metres_made": null
            },
            {
            "name": "Tyrel Lomax",
            "year_born": 1996,
            "caps": 55,
            "international_tries": 0,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Ethan De Groot",
            "year_born": 1998,
            "caps": 46,
            "international_tries": 5,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Codie Taylor",
            "year_born": 1991,
            "caps": 113,
            "international_tries": 25,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Josh Lord",
            "year_born": 2001,
            "caps": 18,
            "international_tries": 0,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Luke Jacobson",
            "year_born": 1997,
            "caps": 30,
            "international_tries": 6,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Ardie Savea",
            "year_born": 1993,
            "caps": 112,
            "international_tries": 35,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Cameron Roigard",
            "year_born": 2000,
            "caps": 25,
            "international_tries": 17,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Ruben Love",
            "year_born": 2001,
            "caps": 11,
            "international_tries": 3,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Jordie Barrett",
            "year_born": 1997,
            "caps": 86,
            "international_tries": 26,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Will Jordan",
            "year_born": 1998,
            "caps": 62,
            "international_tries": 56,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Damian McKenzie",
            "year_born": 1995,
            "caps": 82,
            "international_tries": 24,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Tupou Vaa'i",
            "year_born": 2000,
            "caps": 52,
            "international_tries": 7,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Billy Proctor",
            "year_born": 1999,
            "caps": 13,
            "international_tries": 3,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Wallace Sititi",
            "year_born": 2002,
            "caps": 24,
            "international_tries": 1,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Xavier Numia",
            "year_born": 1998,
            "caps": 5,
            "international_tries": 0,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Asafo Aumua",
            "year_born": 1997,
            "caps": 27,
            "international_tries": 3,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Fletcher Newell",
            "year_born": 2000,
            "caps": 42,
            "international_tries": 2,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Sam Darry",
            "year_born": 2000,
            "caps": 12,
            "international_tries": 2,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Peter Lakai",
            "year_born": 2003,
            "caps": 15,
            "international_tries": 3,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Caleb Clarke",
            "year_born": 1999,
            "caps": 35,
            "international_tries": 16,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Quinn Tupaea",
            "year_born": 1999,
            "caps": 30,
            "international_tries": 5,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Josh Moorby",
            "year_born": 1998,
            "caps": 6,
            "international_tries": 2,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Anton Lienert-Brown",
            "year_born": 1995,
            "caps": 94,
            "international_tries": 17,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Anton Segner",
            "year_born": 2001,
            "caps": 3,
            "international_tries": 0,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Samisoni Taukei'aho",
            "year_born": 1997,
            "caps": 45,
            "international_tries": 14,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Leroy Carter",
            "year_born": 1999,
            "caps": 11,
            "international_tries": 5,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Patrick Tuipulotu",
            "year_born": 1993,
            "caps": 60,
            "international_tries": 8,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Fehi Fineanganofo",
            "year_born": 2002,
            "caps": 1,
            "international_tries": 0,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Jamie Hannah",
            "year_born": 2002,
            "caps": 1,
            "international_tries": 0,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "Pasilio Tosi",
            "year_born": 1998,
            "caps": 18,
            "international_tries": 1,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            },
            {
            "name": "George Bower",
            "year_born": 1992,
            "caps": 30,
            "international_tries": 1,
            "height_m": null,
            "tackle_completion_pct": null,
            "metres_made": null
            }
        ];
shuffle(players);
currentCard();

console.log(p1Current[0].name);
console.log(p1Current[0]);


console.log(p2Current[0].name);
console.log(p2Current[0]);

