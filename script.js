function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");

let playerPick = ""; 

rockButton.addEventListener('click', function() {
  playerPick = "rock";
  computerPick = getComputerChoice();
  playerChoice.textContent = `The player choice is: ${playerPick}`;
  computerChoice.textContent = `The computer choice is: ${computerPick}`;


});

paperButton.addEventListener('click', function() {
  playerPick = "paper";
  computerPick = getComputerChoice();
  playerChoice.textContent = `The player choice is: ${playerPick}`;
  computerChoice.textContent = `The computer choice is: ${computerPick}`;
  
});

scissorsButton.addEventListener('click', function() {
  playerPick = "scissors";
  computerPick = getComputerChoice();
  playerChoice.textContent = `The player choice is: ${playerPick}`;
  computerChoice.textContent = `The computer choice is: ${computerPick}`;

});

