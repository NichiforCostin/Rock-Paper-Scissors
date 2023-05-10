
function getComputerChoice() {
    const words = ["rock", "paper", "scissors"];
    return words[Math.floor(Math.random() * words.length)];
}


function getPlayerChoice() {
    return prompt("Please choose between (rock, paper and scissors) :");
}



function playRound(computerChoice, playerChoice) {

    if(computerChoice === playerChoice) {
        console.log(`It's a tie! You both picked ${playerChoice}.`); 
        return 0;
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        console.log("You win! Paper beats rock.");
        return 1;
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
        console.log("You win! Scissors beats paper.");
        return 1;
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
        console.log("You win! Rock beats Scissors."); 
        return 1;
    } else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}.`);
        return -1;
    }
}
let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 5;
let computerChoice;
let playerChoice;
let winner;
function game () {
    while(numberOfRounds != 0) {
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice().toLowerCase();
        winner = playRound(computerChoice, playerChoice)
        if(winner == 1) {
            playerScore++;
            numberOfRounds--;
        } else if(winner == -1) {
            computerScore++;
            numberOfRounds--;
        }
        
    }
    if(playerScore > computerScore)
        console.log(`Player beats Computer with ${playerScore} to ${computerScore}`);
    else
        console.log(`Computer beats Player with  ${computerScore} to ${playerScore}`);
}
game();