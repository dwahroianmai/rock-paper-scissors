/*  1. getComputerChoiceRandomly returns rock,
    paper or scissors.
    2. playRound is a function that plays a single
    round of the game, parameters case-insensitive. 
    3. function called game, 5 rounds, keeps score
    and reports a winner. */

function getComputerChoiceRandomly() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoiceRandomly()
    playerSelection = prompt("Choose rock, paper or scissors: ");
    if (playerSelection.toLowerCase() === computerSelection) {
        return "draw";
    } else if (computerSelection === "rock" &&
        playerSelection.toLowerCase() === "paper") {
        return "win";
    } else if (computerSelection === "paper" &&
        playerSelection.toLowerCase() === "scissors") {
        return "win";
    } else if (computerSelection === "scissors" &&
        playerSelection.toLowerCase() === "rock") {
        return "win";
    } else {
        return "lose"
    }
}

function game() {
    
}