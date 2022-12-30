const start = document.querySelector('button');
const body = document.querySelector('body');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// create a paragraph explaining rules
const para = document.createElement('p');
para.textContent = "Click on an image to make \
    your choice! The winner is the one who \
    gets 5 points first. Good luck :)";
para.setAttribute('style', 
    'color: rgb(107, 76, 54); \
    font-family: \'Courier New\', \
    Courier, monospace; \
    font-size: 24px; \
    margin-top: 10px; \
    text-align: center; \
    max-width: 50vw;');

const gameCount = document.createElement('p');
gameCount.setAttribute('style', 
    'color: rgb(107, 76, 54); \
    font-family: \'Courier New\', \
    Courier, monospace; \
    font-size: 30px; \
    margin-top: 10px; \
    text-align: center;');

start.addEventListener('click', () => {
    body.insertBefore(gameCount, body.children[2]);
    body.insertBefore(para, body.children[3]);
    game();
})

function game() {
    let userCount = 0;
    let computerCount = 0;
    for (let i = 1; userCount <= 5 || computerCount <= 5; i++) {
        gameCount.textContent = `you -> ${userCount}/${computerCount} <- computer`;
        let computerChoice = getComputerChoiceRandomly();
        rock.addEventListener('click', (e) => getUserChoice(e.target.id));
        paper.addEventListener('click', (e) => getUserChoice(e.target.id));
        scissors.addEventListener('click', (e) => getUserChoice(e.target.id));
        let userChoice = getUserChoice();
        if (playRound(userChoice, computerChoice) === "win") {
            userCount += 1;
        } else if (playRound(userChoice, computerChoice) === "lose") {
            computerCount += 1;
        } 
    } if (computerCount > userCount) {
        console.log("oops");
    } else {
        console.log("congrats");
    }
};

function getUserChoice(id) {
    if (id === "rock") {
        return "rock";
    } else if (id == "paper") {
        return "paper";
    } else {
        return "scissors";
    }
};

// game functions
function getComputerChoiceRandomly() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    } else if (computerSelection === "rock" &&
        playerSelection === "paper") {
        return "win";
    } else if (computerSelection === "paper" &&
        playerSelection === "scissors") {
        return "win";
    } else if (computerSelection === "scissors" &&
        playerSelection === "rock") {
        return "win";
    } else {
        return "lose"
    }
}
