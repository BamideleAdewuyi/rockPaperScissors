// Div, scores and results
const div = document.querySelector("div");
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
    
    // To show scores
    function showScores() {
        return `Your score: ${humanScore}\nComputer score: ${computerScore}`
    }

    // Game over
    function gameOver(human, computer) {
        if (human > computer) {
            results.textContent = "Game over! You won!";
        }
        else {
            results.textContent = "Game over! You lost!";
        }
        const restart = document.createElement("button");
        restart.textContent = "Restart";
        div.appendChild(restart);

        restart.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            scores.textContent = "Player Score: 0\nComputer Score: 0";
        });
        
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

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            results.textContent = "You win! Rock beats scissors";
            humanScore+=1;
            scores.textContent = showScores();
        }
        if (humanChoice == "rock" && computerChoice == "paper") {
            results.textContent = "You lose! Paper beats rock";
            computerScore+=1;
            scores.textContent = showScores();
        }
        if (humanChoice == "paper" && computerChoice == "rock") {
            results.textContent = "You win! Paper beats rock";
            humanScore+=1;
            scores.textContent = showScores();
        }
        if (humanChoice == "paper" && computerChoice == "scissors") {
            results.textContent = "You lose! Scissors beats paper";
            computerScore+=1;
            scores.textContent = showScores();
        }
        if (humanChoice == "scissors" && computerChoice == "paper") {
            results.textContent = "You win! Scissors beats paper";
            humanScore+=1;
            scores.textContent = showScores();
        }
        if (humanChoice == "scissors" && computerChoice == "rock") {
            results.textContent = "You lose! Rock beats scissors";
            computerScore+=1;
            scores.textContent = showScores();
        }
        if (humanChoice == computerChoice) {
            results.textContent = `Draw! ${humanChoice} and ${computerChoice} are even.`;
            scores.textContent = showScores();
        }
        if (humanScore > 4 || computerScore > 4) {
            gameOver(humanScore, computerScore);
        }
    }
    
    
    
}

playGame();
