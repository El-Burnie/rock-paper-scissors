const maxScore = 5;
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const body = document.querySelector("body");
const choiceButtons = document.querySelectorAll(".choice");
const output = document.querySelector("#output");
const scoreBoard = document.querySelector("#scoreBoard");
const resetButton = document.createElement("button");
scoreBoard.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;
resetButton.textContent = "Reset";

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (gameOver) {
            output.textContent = "The game is over! Click the reset button to start a new game.";
        } else {
            playRound(button.textContent, getComputerChoice());
        }
    });
});

resetButton.addEventListener("click", () => {
    gameOver = false;
    humanScore = 0;
    computerScore = 0;
    updateScoreBoard();
    output.textContent = "";
    resetButton.remove();
})

//Randomly picks Rock Paper or Scissors and returns it as a string
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return "Rock";
    }
    else if (x === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

//Takes the human and computer choices, compares them, declares a winner and increments
//the score of the winner by 1. At the end checks to see if the max score has been met.
function playRound(humanChoice, computerChoice) {
    let winState = "";
    switch (humanChoice) {
        case 'Rock': switch (computerChoice) {
            case 'Rock': winState = "tie"; break;
            case 'Paper': winState = "lose"; break;
            case 'Scissors': winState = "win"; break;
        } break;
        case 'Paper': switch (computerChoice) {
            case 'Rock': winState = "win"; break;
            case 'Paper': winState = "tie"; break;
            case 'Scissors': winState = "lose"; break;
        } break;
        case 'Scissors': switch (computerChoice) {
            case 'Rock': winState = "lose"; break;
            case 'Paper': winState = "win"; break;
            case 'Scissors': winState = "tie"; break;
        } break;
    }
    switch (winState) {
        case "win":
            humanScore++;
            updateScoreBoard();
            output.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            break;
        case "tie":
            output.textContent = `It's a tie! You both picked ${humanChoice}.`;
            break;
        case "lose":
            computerScore++;
            updateScoreBoard();
            output.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
            break;
    }
    (humanScore === maxScore || computerScore === maxScore) && declareGameOver();
}

function updateScoreBoard() { 
    scoreBoard.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`; 
}

//Setting gameOver to true will prevent the player from being able to start a new round.
//This forces the player to either click the reset button or refresh the page.
function declareGameOver() {
    gameOver = true;
    output.textContent += "\nGAME OVER!\n";
    if (humanScore > computerScore) {
        output.textContent += "Congratulations, you bested the machine!";
    } else {
        output.textContent += "The computer beat you. Better luck next time!";
    }
    body.appendChild(resetButton);
}