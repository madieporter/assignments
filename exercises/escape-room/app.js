var ask = require("readline-sync");

var playGame = ask.question("Choose your fate. \n\n1. Put your hand in the hole \n\n2. Find the key \n\n3. Open the door   ")
var answers = [];
console.log(escapeRoom(playGame));

function escapeRoom(playGame) {
    var isAlive = true;
    while(isAlive) {
        answers.push(playGame);
        if (playGame == 1) {
            isAlive = false;
            return ("There was a snake in the hole. It bit your hand off and you bled to death. You're dead.");
        } else if (playGame == 2) {
            isAlive = true;
            console.log("You found the key and you're on your way to Jesus!");
            playGame = ask.question("Which fate do you choose now? \n\n1. Put your hand in the hole \n\n 2. Find the key \n\n3. Open the door   ");
        } else if (playGame == 3) {
            if (answers.includes("2")) {
                isAlive = false;
                return ("Jesus forgives you of your sins. Welcome to Hell.")
            } else {
                console.log("Jesus locked the door. Repent of your sins.")
                playGame = ask.question("Which fate do you choose now? \n\n1. Put your hand in the hole \n\n 2. Find the key \n\n3. Open the door   ");
            } 
        } else {
        isAlive = false;
        console.log("You dont get to play the game. Go straight to Heaven. I heard it sucks there.")
        }
    }
}

