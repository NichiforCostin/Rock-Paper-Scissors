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

function getPlayerResult(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "The winner of the game is: Player";
  } else if (playerScore < computerScore) {
    return "The winner of the game is: Computer";
  } else {
    return "The winner of the game is: No one. It's a tie!";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  playerPick = "";
  playerChoice.textContent = "The player choice is: ";
  computerChoice.textContent = "The computer choice is: ";
  winnerParagraph.textContent = "";
  roundCounter.textContent = "Round 0 of 5";
  playerScoreDisplay.textContent = "Player Score: 0";
  computerScoreDisplay.textContent = "Computer Score: 0";
  finalResult.textContent = "";
}

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function enableButtons() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const winnerParagraph = document.getElementById("winnerOfTheRound");
const roundCounter = document.getElementById("roundCounter");
const finalResult = document.getElementById("winnerOfTheGame");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;
let round = 0;


let playerPick = ""; 

rockButton.addEventListener('click', function() {
  playerPick = "rock";
  computerPick = getComputerChoice();
  playerChoice.textContent = `The player choice is: ${playerPick}`;
  computerChoice.textContent = `The computer choice is: ${computerPick}`;
  const result = playRound(playerPick, computerPick);

  if(result === 1) {
    playerScore++;
  } else if (result === -1) {
    computerScore++;
  }

  round++;
  roundCounter.textContent = `Round ${round} of 5`;
  playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

  if (round === 5) {
    finalResult.textContent = getPlayerResult(playerScore, computerScore);
  }

});

paperButton.addEventListener('click', function() {
  playerPick = "paper";
  computerPick = getComputerChoice();
  playerChoice.textContent = `The player choice is: ${playerPick}`;
  computerChoice.textContent = `The computer choice is: ${computerPick}`;
  const result = playRound(playerPick, computerPick);

  if(result === 1) {
    playerScore++;
  } else if (result === -1) {
    computerScore++;
  }

  round++;
  roundCounter.textContent = `Round ${round} of 5`;
  playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

  if (round === 5) {
    finalResult.textContent = getPlayerResult(playerScore, computerScore);
  }

  
});

scissorsButton.addEventListener('click', function() {
  playerPick = "scissors";
  computerPick = getComputerChoice();
  playerChoice.textContent = `The player choice is: ${playerPick}`;
  computerChoice.textContent = `The computer choice is: ${computerPick}`;
  const result = playRound(playerPick, computerPick);

  if(result === 1) {
    playerScore++;
  } else if (result === -1) {
    computerScore++;
  }

  round++;
  roundCounter.textContent = `Round ${round} of 5`;
  playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

  if (round === 5) {
    finalResult.textContent = getPlayerResult(playerScore, computerScore);
  }


});

