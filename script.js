function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerPick, computerPick) {
  if(playerPick === computerPick) {
    winnerParagraph.textContent = "The winner of the round is: No one. It was a tie.";
    
  } else if (playerPick == "rock" && computerPick == "scissors") {
    winnerParagraph.textContent = "The winner of the round is: Player.";
    return 1;
  } else if (playerPick == "paper" && computerPick == "rock") {
    winnerParagraph.textContent = "The winner of the round is: Player.";
    return 1;
  } else if (playerPick == "scissors" && computerPick == "paper") {
    winnerParagraph.textContent = "The winner of the round is: Player.";
    return 1;
  } else {
    winnerParagraph.textContent = "The winner of the round is: Computer";
    return -1;
  }
}

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const winnerParagraph = document.getElementById("winnerOfTheRound");

let playerPick = ""; 

rockButton.addEventListener('click', function() {
  playerPick = "rock";
  computerPick = getComputerChoice();
  playerChoice.textContent = `The player choice is: ${playerPick}`;
  computerChoice.textContent = `The computer choice is: ${computerPick}`;
  playRound(playerPick, computerPick);

});

paperButton.addEventListener('click', function() {
  playerPick = "paper";
  computerPick = getComputerChoice();
  playerChoice.textContent = `The player choice is: ${playerPick}`;
  computerChoice.textContent = `The computer choice is: ${computerPick}`;
  playRound(playerPick, computerPick);
  
});

scissorsButton.addEventListener('click', function() {
  playerPick = "scissors";
  computerPick = getComputerChoice();
  playerChoice.textContent = `The player choice is: ${playerPick}`;
  computerChoice.textContent = `The computer choice is: ${computerPick}`;
  playRound(playerPick, computerPick);

});

