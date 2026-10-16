const players = [
            {
            "name": "Cortez Ratima",
            "year_born": 2001,
            "caps": 24,
            "international_tries": 2,
            "img": "./images/C_Ratima.png"
            },
            {
            "name": "Tyrel Lomax",
            "year_born": 1996,
            "caps": 55,
            "international_tries": 0,
            "img": "./images/T_Lomax.png"
            },
            {
            "name": "George Bower",
            "year_born": 1992,
            "caps": 30,
            "international_tries": 1,
            "img": "./images/G_Bower"
            },       
            {
            "name": "Ethan De Groot",
            "year_born": 1998,
            "caps": 46,
            "international_tries": 5,
            "img": "./images/E_DeGroot.png"
            },
            {
            "name": "Codie Taylor",
            "year_born": 1991,
            "caps": 113,
            "international_tries": 25,
            "img": "./images/C_Taylor.png"
            },
            {
            "name": "Josh Lord",
            "year_born": 2001,
            "caps": 18,
            "international_tries": 0,
            "img": "./images/J_Lord.png"
            },
            {
            "name": "Luke Jacobson",
            "year_born": 1997,
            "caps": 30,
            "international_tries": 6,
            "img": "./images/L_Jacobson.png"
            },
            {
            "name": "Ardie Savea",
            "year_born": 1993,
            "caps": 112,
            "international_tries": 35,
            "img": "./images/A_Savea.png"
            },
            {
            "name": "Cameron Roigard",
            "year_born": 2000,
            "caps": 25,
            "international_tries": 17,
            "img": "./images/C_Roigard.png"
            },
            {
            "name": "Anton Segner",
            "year_born": 2001,
            "caps": 3,
            "international_tries": 0,
            "img": "./images/A_Segner.png"
            },
            {
            "name": "Samisoni Taukei'aho",
            "year_born": 1997,
            "caps": 45,
            "international_tries": 14,
            "img": "./images/S_Taukei'aho.png"
            },
            {
            "name": "Leroy Carter",
            "year_born": 1999,
            "caps": 11,
            "international_tries": 5,
            "img": "./images/L_Carter.png"
            },
            {
            "name": "Patrick Tuipulotu",
            "year_born": 1993,
            "caps": 60,
            "international_tries": 8,
            "img": "./images/P_Tuipulotu.png"
            },
            {
            "name": "Fehi Fineanganofo",
            "year_born": 2002,
            "caps": 1,
            "international_tries": 0,
            "img": "./images/F_Fineanganofo.png"
            },
            {
            "name": "Jamie Hannah",
            "year_born": 2002,
            "caps": 1,
            "international_tries": 0,
            "img": "./images/J_Hannah.png"
            },
            {
            "name": "Pasilio Tosi",
            "year_born": 1998,
            "caps": 18,
            "international_tries": 1,
            "img": "./images/P_Tosi.png"
            },
            {
            "name": "George Bower",
            "year_born": 1992,
            "caps": 30,
            "international_tries": 1,
            "img": "./images/G_Bower.png"
            }
];


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

// function randomClick() {

//     document.addEventListener('DOMContentLoaded'), () => {
//         element.addEventListener('click', () => {
//             function getPlayer(item) {
//                 return `
//                     <div class="player">
//                     <img src="${item.img}" alt="${item.name}">
//                     <p>${item.name} <br> ${item.caps} caps 
//                         <br>${item.international_tries}  International Tries
//                         <br> Year of Birth : ${item.year_born} </p>
//                     </div>
//                     `;
//                 }
//             })
//         }
// }    

getPlayer()