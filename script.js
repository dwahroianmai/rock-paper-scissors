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
    let countUser = 0;
    let countComputer = 0;
    for (let i = 0; i < 5; i++) {
        let user = prompt("Choose rock, paper or scissors: ");
        let computer = getComputerChoiceRandomly();
        if (playRound(user, computer) === "win") {
            console.log("You won this round!");
            countUser++;
        } else if (playRound(user, computer) === "lose") {
            console.log("You lost this round!");
            countComputer++;
        } else {
            console.log("It's a draw for this one!");
        }
    } if (countComputer > countUser) {
        return "You've lost the game :("
    } else if (countUser > countComputer) {
        return "Congrats! You won!"
    } else {
        return "It's a draw."
    }
}