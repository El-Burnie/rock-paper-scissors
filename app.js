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
        case 'rock' : switch (computerChoice) {
            case 'rock' : winState = "tie"; break;
            case 'paper' : winState = "lose"; break;
            case 'scissors' : winState = "win"; break;
        } break;
        case 'paper' : switch (computerChoice) {
            case 'rock' : winState = "win"; break;
            case 'paper' : winState = "tie"; break;
            case 'scissors' : winState = "lose"; break;
        } break;
        case 'scissors' : switch (computerChoice) {
            case 'rock' : winState = "lose"; break;
            case 'paper' : winState = "win"; break;
            case 'scissors' : winState = "tie"; break;
        } break;
    }
}

//START

//INIT playerScore and computerScore to 0

//FUNCTION getComputerChoice()
//  COMPUTE a random number between 1 and 3 and SET x to the result
//  IF x === 1 THEN
//      RETURN "rock"
//  ELSE IF x === 2 THEN
//      RETURN "paper"
//  ELSE
//      RETURN "scissors"

//FUNCTION getHumanChoice()
//  INIT validResponse to false
//  WHILE validResponse is false
//      GET user input with prompt "rock, paper, scissors" SET choice to the response
//      SET choice to lowercase
//      IF choice is rock or paper or scissors
//          SET validResponse to true
//      ENDIF
//  ENDWHILE
//  RETURN choice

//FUNCTION playRound(playerChoice, computerChoice)
//  INIT winState   
//  CASE playerChoice
//      rock : CASE computerChoice
//          rock : SET winState to tie
//          paper : SET winState to lose
//          scissors : SET winState to win
//      paper : CASE computerChoice
//          rock : SET winState to win
//          paper : SET winState to tie
//          scissors : SET winState to lose
//      scissors : CASE computerChoice
//          rock : SET winState to lose
//          paper : SET winState to win
//          scissors : SET winState to tie
//  CASE winState
//      win : INCREMENT playerScore and print you win message
//      tie : print you tied message
//      lose : INCREMENT computerScore and print you lose message  

//WHILE roundCount is less than 5
//  DETERMINE the computer's choice
//  GET the player's choice from a prompt
//  DETERMINE the winner by comparing the player and computer choices
//  INCREMENT the winner's score by 1
//  INCREMENT roundCount by 1
//ENDWHILE