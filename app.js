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
    let choice;
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

//START

//INIT playerScore, computerScore, roundCount to 0

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


//WHILE roundCount is less than 5
//  DETERMINE the computer's choice
//  GET the player's choice from a prompt
//  DETERMINE the winner by comparing the player and computer choices
//  INCREMENT the winner's score by 1
//  INCREMENT roundCount by 1
//ENDWHILE