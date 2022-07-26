// Function for computer to generate a random choice between rock, paper, or scissors
function getComputerSelection() {
    // Give computer choices: rock, paper, scissors
    let choices = ["rock", "paper", "scissors"];
    
    // Set computerSelection to a random pick of the array of choices 
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];

    // Return computerSelection
    return computerSelection;
}

// Function to get input from user
function getUserSelection() {
    // Prompt user to input one of three prescribed choices
    let userSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    return userSelection;
}

// Function to determine winner between user and computer
function playRound() {
    // Initiate variables for comparisons and output message
    let computerSelection = getComputerSelection();
    let userSelection = getUserSelection();
    let message = "";

    // Check for ties
    if (computerSelection == userSelection) {
        message =  `It's a tie. You both picked ${userSelection}.`;
    }

    // Check for computer winning
    else if ((computerSelection == "rock" && userSelection == "scissors") ||(computerSelection == "paper" && userSelection == "rock") || (computerSelection == "scissors" && userSelection == "paper") ) {
        message = `You lose! ${computerSelection} beats ${userSelection}.`;  
    }

    // Otherwise, user wins
    else {
        message = `You win! ${userSelection} beats ${computerSelection}.`;
    }

    // Return message (which side won)
    return message;
}

// Function to iterate playRound for 5 rounds
function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound())
    }
}

// Call game to initiate game play
game();