function getComputerChoice() {
 let choices = ['Rock', 'Paper', 'Scissors'];
 console.log(choices);
 return choices[Math.floor(Math.random() * choices.length)];
    }


function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");
    console.log(humanChoice);
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(getComputerChoice, getHumanChoice) {
    
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
