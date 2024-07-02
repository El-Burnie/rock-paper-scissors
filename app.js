function getComputerChoice() {
    let x = Math.floor(Math.random()*3);
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

//FUNCTION playRound(playerChoice, computerChoice)   


//WHILE roundCount is less than 5
//  DETERMINE the computer's choice
//  GET the player's choice from a prompt
//  DETERMINE the winner by comparing the player and computer choices
//  INCREMENT the winner's score by 1
//  INCREMENT roundCount by 1
//ENDWHILE