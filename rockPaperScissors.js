// Create body
const body = document.querySelector("body");

// Prompt
const select = document.createElement("h1");
select.textContent = "Click rock, paper or scissors";
body.appendChild(select);

// Message for outcome of each round
let msg = document.createElement("p");
msg.textContent = "Results of round will show here";
body.appendChild(msg);

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


const testBtn = document.createElement("button")
testBtn.textContent = "Testing";
body.appendChild(testBtn);

function testFunc() {
    console.log("testing");
}

testBtn.addEventListener("click", () => {
    testFunc();
});

// Set up game to play for 5 rounds
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
        return;
    };
    
};

playGame();

//// TAKE BUTTONS OUT OF FUNCTION AND TRY IT THAT WAY