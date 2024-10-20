
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice===0){
        console.log("COMPUTER CHOSE STONE!")
    }
    else if (computerChoice===1){
        console.log("COMPUTER CHOSE PAPER!")
    }
    else if (computerChoice===2){
    console.log("COMPUTER CHOSE SCISSORS!")
    
}
return computerChoice;}
function getHumanChoice(){
    let humanChoice = parseInt(prompt("0 FOR STONE \n1 FOR PAPER \n2 FOR SCISSORS"))

    if (humanChoice===0){
        console.log("YOU CHOSE STONE")
    }
    else if(humanChoice===1){
        console.log("YOU CHOSE PAPER")
    }
    else if(humanChoice===2){
        console.log("YOU CHOSE SCISSORS")
    }
    return humanChoice;

}
function playRound(humanChoice,computerChoice){
    if (humanChoice===computerChoice){
        console.log("ITS A TIE! TRY AGAIN ")
        
    }
    else if (humanChoice===0 && computerChoice===1){
        console.log("COMPUTER GETS A POINT")
        computerScore++;
    }
    else if (humanChoice===1 && computerChoice===0){
        console.log("YOU GETS A POINT")
        humanScore++;
    }
    else if (humanChoice===2 && computerChoice===0){
        console.log("COMPUTER GETS A POINT")
        computerScore++;
    }
    else if (humanChoice===0 && computerChoice===2){
        console.log("YOU GETS A POINT")
        humanScore++;
    }
    else if (humanChoice===1 && computerChoice===2){
        console.log("COMPUTER GETS A POINT")
        computerScore++;
    }
    else if (humanChoice===2 && computerChoice===1){
        console.log("YOU GETS A POINT")
        humanScore++;
    }
}
function playGame(){
    
    let condition = true;
    while(condition){
        let humanChoice=getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice)
        if(humanScore===5 || computerScore===5){
            condition=false;
            if(humanScore>computerScore){
                console.log("YOU WIN!!")
            }
            else{
                console.log("COMPUTER WINS!!")
            }
        }
        console.log("YOUR POINTS: "+humanScore + "\nCOMPUTER POINTS: "+computerScore)

    }
}
let humanScore = 0;
let computerScore = 0; 
console.log ("WELCOME TO THE GAME!!")
playGame();