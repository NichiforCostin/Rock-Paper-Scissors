
function getComputerChoice() {
    const words = ["rock", "paper", "scissors"];
    return words[Math.floor(Math.random() * words.length)];
}
const computerChoice = getComputerChoice()
console.log(computerChoice);

function getPlayerChoice() {
    return prompt("Please choose between (rock, paper and scissors) :");
}
const playerChoice = getPlayerChoice();
console.log(playerChoice);

function playRound(computerChoice, playerChoice) {
    if(computerChoice === playerChoice) {
        return `It's a tie! You both picked ${playerChoice}.`;
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        return "You win! Paper beats rock.";
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
        return "You win! Scissors beats paper.";
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
        return "You win! Rock beats Scissors."
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}
console.log(playRound(computerChoice, playerChoice));
