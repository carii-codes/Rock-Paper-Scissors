 // Rock Paper Scissors Game //    

// Create function to play computers turn // 
// Create function to play players turn // 
// Declare score variables // 
// Create function to decide winner // 
// Declare play variables //

const play = ["rock", "paper", "scissors"];
play = play.toLowerCase(); 

let computerSelection;
let playerSelection; 
let computerScore = 0;
let playerScore = 0;
let winner = '';

function computerSelection() {
    const play ["rock", "paper", "scissors"];
    return play[Math.floor(Math.random() * play.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { 
        return `It's a tie! You both picked ${playerSelection}`;
     } else if (playerSelection === "rock" && computerSelection === "scissors") ||
               (playerSelection === "paper" && computerSelection === "rock") || 
               (playerSelection === "scissors" && computerSelection === "paper") {
        return playerScore++;
        winner = 'player';
     } else (computerSelection === "rock" && playerSelection === "scissors") || 
               (computerSelection === "paper" && playerSelection === "rock") ||
               (computerSelection === "scissors" && playerSelection === "paper") {
        return computerScore++;
        winner = 'computer' 
               }
            }; 