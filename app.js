let humanScore = 0;
let computerScore = 0;

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

//Prompts user to input Rock Paper or Scissors. Loops until user submits a
//valid response and returns it as a string
function getHumanChoice() {
    let validResponse = false;
    let choice = "";
    while (!validResponse) {
        try {
            choice = prompt("Rock, Paper, Scissors").toLowerCase();

            if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
                validResponse = true;
            } else {
                alert("Please enter a valid choice");
            }
        } catch (error) {
            alert("Please enter a valid choice");
        }
    }
    return choice;
}

//Takes the human and computer choices, compares them, declares a winner and increments
//the score of the winner by 1
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
}

const buttons = document.querySelectorAll("button");
const output = document.querySelector("#output");
const scoreBoard = document.querySelector("#scoreBoard");
scoreBoard.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    });
});

function updateScoreBoard() { scoreBoard.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;}

/*
//Calls playRound() five times and then declares a winner.
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations, you bested the machine!");
    }
    else if (humanScore < computerScore) {
        console.log("The computer beat you. Better luck next time!");
    }
    else {
        console.log("The match was a draw.")
    }
//Reset scores for another game
    humanScore = 0;
    computerScore = 0;
}
*/