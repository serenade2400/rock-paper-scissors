let cspoint = 0;
let userPoint = 0;

const prompt = require('prompt-sync')();
console.log("WELCOME TO GAME: ");
console.log("LETS PLAY!!!!");
console.log("YOU HAVE THREE CHOICES: STONE PAPER OR SCISSORS");
console.log("WRITE 0 FOR STONE 1 FOR PAPER AND 2 FOR SCISSORS");

let condition = true;
while (condition) {
    let choiceNum = Math.floor(Math.random() * 3);
    let userChoice = parseInt(prompt("Enter your choice!!!"));
    if (userPoint === 5 || cspoint === 5) {
        condition = false;
        if (userPoint === 5) {
            console.log("YOU WIN!!\nYour Points: " + userPoint + " \nMy Point: " + cspoint);
        } else if (cspoint === 5) {
            console.log("YOU LOOSE!!\nYour Points: " + userPoint + " \nMy Point: " + cspoint);
        }
    } else if (userChoice === choiceNum) {
        console.log("ITS A TIE TRY AGAIN");
    } else if (userChoice === 0 && choiceNum === 1) {
        console.log("I GET A POINT ");
        cspoint++;
    } else if (userChoice === 1 && choiceNum === 0) {
        console.log("YOU GET A POINT");
        userPoint++;
    } else if (userChoice === 2 && choiceNum === 0) {
        console.log("I GET A POINT");
        cspoint++;
    } else if (userChoice === 0 && choiceNum === 2) {
        console.log("YOU GET A POINT");
        userPoint++;
    } else if (userChoice === 1 && choiceNum === 2) {
        console.log("I GET A POINT");
        cspoint++;
    } else if (userChoice === 2 && choiceNum === 1) {
        console.log("YOU GET A POINT");
        userPoint++;
    }
}
