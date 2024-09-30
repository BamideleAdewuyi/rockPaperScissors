// Function for computer's choice
function getComputerChoice() {
    let num = Math.random();

    if (num <= 1/3) {
        choice = "rock";
    }
    else if (num > 1/3 && num <= 2/3) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice
}

// Function for getting human's choice
function getHumanChoice() {
    let choice = prompt("Enter rock, paper or scissors");
    return choice.toLowerCase();
}


// Initialise scores as 0
let humanScore = 0;
let computerScore = 0;

// Function for playing a single round
function playRound(humanChoice, computerChoice) {
    return
}

console.log(getHumanChoice())