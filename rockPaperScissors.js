// Function for computer's choice
function getComputerChoice() {
    let num = Math.random();

    if (num <= 1/3) {
        choice = "Rock";
    }
    else if (num > 1/3 && num <= 2/3) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }
    console.log(choice)
}

// Function for getting human's choice
function getHumanChoice() {
    let num = prompt("Enter 1 for rock, 2 for paper or 3 for scissors");
    console.log(num)
    if (num == 1) {
        choice = "Rock";
    }
    else if (num == 2) {
        choice = "Paper";
    }
    else if (num == 3) {
        choice = "Scissors";
    }
    else {
        choice = null;
        alert("You did not make a choice!")
    }
    return choice;
}

console.log(getHumanChoice())