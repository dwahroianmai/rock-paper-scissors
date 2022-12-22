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

