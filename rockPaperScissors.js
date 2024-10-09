// Create body
const body = document.querySelector("body");

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

// Set up game to play for 5 rounds
function playGame() {
    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");

    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";

    body.appendChild(rock);
    body.appendChild(paper);
    body.appendChild(scissors);

    function getHumanChoice (choice) {
        return choice;
    }

    rock.addEventListener("click", () => {
        getHumanChoice("rock")
    });
    paper.addEventListener("click", () => {
        getHumanChoice("paper")
    });
    scissors.addEventListener("click", () => {
        getHumanChoice("scissors")
    });
}

playGame();