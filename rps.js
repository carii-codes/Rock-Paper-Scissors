 // Rock Paper Scissors Game //    

// Declare play variables 
const play = ["rock", "paper", "scissors"];
play = play.toLowerCase(); 

// Declare both scores starting at 0 
let computerSelection;
let playerSelection; 
let computerScore = 0;
let playerScore = 0;
let winner = '';

// Function to play computers turn 
function computerSelection() {
    return play[Math.floor(Math.random() * play.length)];
}

// Function to take players choice 
    const getUserChoice = (playerSelection) => {

        playerSelection = playerSelection.toLowerCase();
      
        if( playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){
      
          return playerSelection;
      
        }else{
      
         console.log('Invalid selection,choose only rock paper scissors');
      
        }
      
      }


// Function to play single round of rock, paper, scissors  
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { 
        return `It's a tie! You both picked ${playerSelection}`;
     } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
               (playerSelection === "paper" && computerSelection === "rock") || 
               (playerSelection === "scissors" && computerSelection === "paper") 
     ) {
        return playerScore++;
        winner = 'player';
     } else if ( (computerSelection === "rock" && playerSelection === "scissors") || 
               (computerSelection === "paper" && playerSelection === "rock") ||
               (computerSelection === "scissors" && playerSelection === "paper")
      ) ; {
        return computerScore++;
        winner = 'computer' 
               }
            }; 

// Function to keep score 
function game() {

}