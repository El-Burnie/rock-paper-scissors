let humanScore = 0;
let computerScore = 0;

//Randomly picks rock paper or scissors and returns it as a string
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return "rock";
    }
    else if (x === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//Prompts user to input rock paper or scissors. Loops until user submits a
//valid response and returns it as a string
function getHumanChoice() {
    let validResponse = false;
    let choice = "";
    while (!validResponse) {
        try {
            choice = prompt("rock, paper, scissors").toLowerCase();

            if (choice === "rock" || choice === "paper" || choice === "scissors") {
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
        case 'rock': switch (computerChoice) {
            case 'rock': winState = "tie"; break;
            case 'paper': winState = "lose"; break;
            case 'scissors': winState = "win"; break;
        } break;
        case 'paper': switch (computerChoice) {
            case 'rock': winState = "win"; break;
            case 'paper': winState = "tie"; break;
            case 'scissors': winState = "lose"; break;
        } break;
        case 'scissors': switch (computerChoice) {
            case 'rock': winState = "lose"; break;
            case 'paper': winState = "win"; break;
            case 'scissors': winState = "tie"; break;
        } break;
    }
    switch (winState) {
        case "win":
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            break;
        case "tie":
            console.log(`It's a tie! You both picked ${humanChoice}.`);
            break;
        case "lose":
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            break;
    }
}

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
    /*Reset scores for another game*/
    humanScore = 0;
    computerScore = 0;
}