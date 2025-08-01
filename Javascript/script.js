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

