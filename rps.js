 // Rock Paper Scissors Game //    

// Create function to play computers turn // 
// Create function to play players turn // 
// Declare score variables // 
// Create function to decide winner // 
// Declare play variables //

let play = ["rock", "paper", "scissors"];
play = play.toLowerCase(); 

function computersSelection() {
    const play ["rock", "paper", "scissors" ];
    return play[Math.floor(Math.random() * pick.length)];
}

function playersSelection() {
    const play ["rock", "paper", "scissors"];
    return play[Math.floor(Math.random() * pick.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { 
        return `It's a tie! You both picked ${playerSelection}`;
     } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! rock beats scissors";
     } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats rock";
     } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! scissors beats paper";
     } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
     }
        
    
}