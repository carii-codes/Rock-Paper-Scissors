
function computersTurn() {
    const play ["Rock", "Paper", "Scissors" ];
    return play[Math.floor(Math.random() * pick.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { 
        return `It's a tie! You both picked ${playerSelection}`;
     } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
     } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock";
     } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper";
     } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
     }
        
    
}