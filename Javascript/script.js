// Get the computer's choice
function getComputerChoice() {

    // get a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    // if the random number is 0, return "rock"
    // if the random number is 1, return "paper"
    // if the random number is 2, return "scissors"
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Get the human choice
function getHumanChoice(){

    // Prompt the user for an integer between 0 and 2
    const userChoice = parseInt(prompt(`Please enter your choice:
        - 0 for rock
        - 1 for paper
        - 2 for scissors: `));
    
    // If O return "rock"
    // If 1 return "paper"
    // If 2 return "scissors"
    switch(userChoice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// The logic to play the entire game 
// Play 5 rounds of the game
// and display the final score
function playGame(){
    // Declare the players score variables
    let humanScore = 0, computerScore = 0;

    // The logic to play a single round of the game

    // Choice is one of 
    // - "rock"
    // - "paper"
    // - "scissors"
    // Choice Choice -> Undifined
    // Takes two choices and increment the round's winner choice
    // and display the winner 
    function playRound(humanChoice, computerChoice) {
        // There are 8 cases; decide with respect to the case the winner 
        // "rock" "rock"           Tie 
        // "rock" "paper"      Computer wins 
        // "rock" "scissors"   Human wins
        // "paper" "rock"   Human wins
        // "paper" "paper"     Tie
        // "paper" "scissors"  Computer wins
        // "scissors" "rock"   Computer wins
        // "scissors" "paper"  Human wins
        // "scissors" "scissors"   Tie

        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        }
        if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    // Play 5 rounds of the game
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    // Display the final score
    if (humanScore > computerScore) {
        console.log(`You win the game! 
            Final Score: You ${humanScore} - Computer ${computerScore}`);
    }
    else if (computerScore > humanScore) {
        console.log(`Computer wins the game! 
            Final Score: You ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`It's a tie! 
            Final Score: You ${humanScore} - Computer ${computerScore}`);
    }
}

// Start the game
playGame();