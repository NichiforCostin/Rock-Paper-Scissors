# Rock-Paper-Scissors-Project REVAMPED

This project now has a fully fledged webpage to play the legendary rock paper scissors game!

I added some extensive HTML & CSS and basically revamped almost all javascript code so that it involves more DOM elements.

So now the game contains four interactive clickable buttons one to start/restart the game and three to select one of the three choices (rock, paper, scissors). The player/computer choices, scores, round counter, round winner and game winner are displayed in the paragraph below the buttons.

# Technologies used

    JAVASCRIPT

    HTML

    CSS

# Rock-Paper-Scissors-Project OLD

This project resembles a rock paper scissors game made all from scratch using vanilla javascript.

The code itself is divided into four functions, all of which have their own purpose.

The "getComputerChoice()" function does exactly as the name suggests, I used math. Floor () and math. Random () to randomly return one value of an array of words ["rock", "paper", "scissors"].

The "getPlayerChoice()" function alerts the user to prompt a value from 3 options: rock, paper and scissors.

The "playRound()" functions takes 2 parameters (playerChoice and computerChoice) both generated from the 2 functions displayed earlier and compares the choices. The functions returns a number and displays the winner of the round.

The "game()" function combines everything to play a 5 turn rock-paper-scissors. I used a loop to get player and computer choices and play 5 rounds. I made sure that if it's a tie between them I don't count it as a round and that the user can input case sensitive words such as "ROCK, rock, RoCk" and the code will still run because of the toLowerCase () method.

# Technologies used OLD

    JAVASCRIPT
