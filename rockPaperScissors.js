// Create body object to add buttons and results to
const body = document.querySelector("body");
// Prompt div
const select = document.createElement("p");
select.textContent = "Select rock, paper or scissors";
body.appendChild(select);
// Results div
const results = document.createElement("div");
body.appendChild(results);

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






// Set up game to run for 5 rounds
function playGame() {

    // Initialise scores as 0
    let humanScore = 0;
    let computerScore = 0;

    // Function for playing a single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            results.textContent = "You win! Rock beats scissors";
            humanScore+=1;
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            results.textContent = "You lose! Paper beats rock";
            computerScore+=1;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            results.textContent = "You win! Paper beats rock";
            humanScore+=1;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            results.textContent = "You lose! Scissors beats paper";
            computerScore+=1;
        }
        if (humanChoice == "scissors" && computerChoice == "paper") {
            results.textContent = "You win! Scissors beats paper";
            humanScore+=1;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            results.textContent = "You lose! Rock beats scissors";
            computerScore+=1;
        }
        else if (humanChoice == computerChoice) {
            results.textContent = `Draw! ${humanChoice} and ${computerChoice} are even.`;
        }
        return
    }
    // // Set up while loop to run until a point has been scored 5 times
    // while ((humanScore + computerScore) < 5) {
    //     // Create constants for selections
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     // Call play round
    //     playRound(humanSelection, computerSelection);
    //     console.log(`Current scores:\nYou: ${humanScore} Computer: ${computerScore}`);
    // }
    // if (humanScore > computerScore) {
    //     console.log("You win!")
    // }
    // else {
    //     console.log("You lost!")
    // }

    // Button for each selection
    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");

    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";

    body.appendChild(rock);
    body.appendChild(paper);
    body.appendChild(scissors);

    rock.addEventListener("click", playRound("rock", getComputerChoice));
    paper.addEventListener("click", playRound("paper", getComputerChoice));
    scissors.addEventListener("click", playRound("scissors", getComputerChoice));

    return
}

playGame();