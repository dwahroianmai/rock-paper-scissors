const start = document.querySelector('button');
const body = document.querySelector('body');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// create a paragraph explaining rules
const paraStart = "Click on an image to make \
your choice! The winner is the one who \
gets 5 points first. Good luck :)";
const para = document.createElement('p');
para.setAttribute('style', 
    'color: rgb(107, 76, 54); \
    font-family: \'Courier New\', \
    Courier, monospace; \
    font-size: 24px; \
    margin-top: 10px; \
    text-align: center; \
    max-width: 50vw;');

// create game count
const gameCount = document.createElement('p');
gameCount.setAttribute('style', 
    'color: rgb(107, 76, 54); \
    font-family: \'Courier New\', \
    Courier, monospace; \
    font-size: 30px; \
    margin-top: 10px; \
    text-align: center;');

//button pressed, game starts
start.addEventListener('click', () => {
    let userChoice;
    let computerChoice;
    let userCount = 0;
    let computerCount = 0;
    gameCount.textContent = `you -> ${userCount}/${computerCount} <- computer`
    para.textContent = paraStart;
    body.insertBefore(gameCount, body.children[2]);
    body.insertBefore(para, body.children[3]);
    rock.addEventListener('click', (e) => {
        para.textContent = paraStart;
        gameCount.textContent = `you -> ${userCount}/${computerCount} <- computer`;
        userChoice = e.target.id;
        computerChoice = getComputerChoiceRandomly();
        if (userCount !== 5 && computerCount !== 5) {
            if (playRound(userChoice, computerChoice) == "win") {
                return userCount += 1;
            } else if (playRound(userChoice, computerChoice) === "lose") {
                return computerCount += 1;
            }
        } else if (userCount === 5 || computerCount === 5) {
            finalMessage(userCount, computerCount);
        }
    });
    paper.addEventListener('click', (e) => {
        para.textContent = paraStart;
        gameCount.textContent = `you -> ${userCount}/${computerCount} <- computer`;
        userChoice = e.target.id;
        computerChoice = getComputerChoiceRandomly();
        if (userCount !== 5 && computerCount !== 5) {
            if (playRound(userChoice, computerChoice) == "win") {
                return userCount += 1;
            } else if (playRound(userChoice, computerChoice) === "lose") {
                return computerCount += 1;
            }
        } else if (userCount === 5 || computerCount === 5) {
            finalMessage(userCount, computerCount);
        }
    });
    scissors.addEventListener('click', (e) => {
        para.textContent = paraStart;
        gameCount.textContent = `you -> ${userCount}/${computerCount} <- computer`;
        userChoice = e.target.id;
        computerChoice = getComputerChoiceRandomly();
        if (userCount !== 5 && computerCount !== 5) {
            if (playRound(userChoice, computerChoice) == "win") {
                return userCount += 1;
            } else if (playRound(userChoice, computerChoice) === "lose") {
                return computerCount += 1;
            }
        } else if (userCount === 5 || computerCount === 5) {
            finalMessage(userCount, computerCount);
        }
    });
});

// game functions
function finalMessage(user, pc) {
    if (user > pc) {
        para.textContent = "Congrats! You have won. Press 'start' to play again :)";
    } else if (pc > user) {
        para.textContent = "Oops! Looks like you've lost. Press 'start' to play again :)";
    } else {
        para.textContent = "Wow, it's a draw! Press 'start' to play again :)";
    }
}

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
        return "lose";
    }
}
