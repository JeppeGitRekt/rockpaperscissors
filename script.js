// generates one of three words, "rock, paper, scissors"
function getComputerChoice() {
 let choices = ['Paper', 'Rock', 'Scissors'];
 return choices[Math.floor(Math.random() * choices.length)];
    }

// creates prompt and returns user input
function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");
    console.log(humanChoice);
    return humanChoice;
}

// variables to store score between human and computer
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice == 'rock' && computerChoice == 'Scissors') {
        console.log("You win! The computer chose scissors!");
    }
    else if (humanChoice == 'paper' && computerChoice == 'Rock') {
        console.log("You win! The computer chose rock!");
    }
    else if (humanChoice == 'scissors' && computerChoice == 'Paper') {
        console.log("You win! The computer chose paper!");
    }
    else if (humanChoice == 'rock' && computerChoice == 'Paper') {
        console.log("You lose. Computer chose paper!");
    }
    else if (humanChoice == 'paper' && computerChoice == 'Scissors') {
        console.log("You lose. Computer chose scissors!");
    }
    else if (humanChoice == 'scissors' && computerChoice == 'Rock') {
        console.log("You lose. Computer chose rock!");
    }
    else {
        console.log("It's a tie! You both chose " + humanChoice + '.');
    }

    if (humanChoice > computerChoice) {
        humanScore++;
    }
    else {
        computerScore++;
    }
    console.log('Your score: ' + humanScore);
    console.log('Computers score: ' + computerScore);
    }


const humanChoice = getHumanChoice().toLowerCase();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
