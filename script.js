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
    let userSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    return userSelection;
}

// Function to determine winner between user and computer: playRound


// Function to iterate playRound for 5 rounds: game ()