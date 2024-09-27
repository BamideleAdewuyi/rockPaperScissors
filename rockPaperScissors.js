// Create function for computer's choice
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

getComputerChoice()