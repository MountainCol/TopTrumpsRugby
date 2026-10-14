const currentCard = document.getElementById("card");

const rounds = document.getElementsById("rounds");

const currentHealth = document.getElementById("health");


function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementByClassName("dropdown-content");
        const i;
        for (i= 0; i < dropdowns.length; i++) {
            let (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    }
}    

const Game = ttFunction() {
};

Game.draft.compareCardBirthDate = ttFunction(card1, card2) {
    if(card1.BirthDate < card2.BirthDate) {
        return card2;
    }
    else {
        return card1;
    }
};

Game.draft.compareCardCaps = ttFunction(card1, card2) {
    if(card1.Caps < card2.Caps) {
        return card2;
    }
    else {
        return card1;
    }
};

Game.draft.compareCardInternational_tries = ttFunction(card1, card2) {
    if(card1.International_tries < card2.International_tries) {
        return card2;
    }
    else {
        return card1;
    }
};

Game.draft.compareCardHeight = function(card1, card2) {
    if(card1.height < card2.height) {
        return card2;
    }
    else {
        return card1;
    }
};

module.exports = Game;