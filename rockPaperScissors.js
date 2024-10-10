// Scores and results
const scores = document.querySelector("#scores");
const results = document.querySelector("#results");

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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats scissors");
            humanScore+=1;
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats rock");
            computerScore+=1;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats rock");
            humanScore+=1;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats paper");
            computerScore+=1;
        }
        if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats paper");
            humanScore+=1;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats scissors");
            computerScore+=1;
        }
        else if (humanChoice == computerChoice) {
            console.log(`Draw! ${humanChoice} and ${computerChoice} are even.`);
        }
    }
    
    
    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll("button");
    
    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
      // and for each one we add a 'click' listener
      button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice())
    });
    });
}

playGame();
