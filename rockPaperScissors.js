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
    let choice = prompt("Enter rock, paper or scissors").toLowerCase();
    return choice;
}


// Initialise scores as 0
let humanScore = 0;
let computerScore = 0;

// Function for playing a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors");
        humanChoice++;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock");
        computerChoice++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock");
        humanChoice++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper");
        computerChoice++;
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper");
        humanChoice++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors");
        computerChoice++;
    }
    else if (humanChoice == computerChoice) {
        console.log('Draw! ${humanChoice} and ${computerChocie} are even.');
    }
    return
}

// Create constants for selections
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
