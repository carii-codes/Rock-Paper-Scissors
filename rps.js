 // Rock Paper Scissors Game //    


// Caching DOM elements 
const computerScore = 0;
const playerScore = 0;
const playerScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const results_div = document.querySelector(".results");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


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
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Lets play rock paper scissors!");

        console.log ("you choose " +playerSelection.toLowerCase()); 

        computerSelection = ["rock","paper","scissors"];//update computerSelection
        computerPlay= Math.floor(Math.random() * computerSelection.length);//update computerPlay
  
        console.log("The computer choose " +computerPlay, computerSelection[computerPlay]);//define computer input  

        console.log(playRound(playerSelection, computerSelection)); 
         }
          if (playerScore>computerScore){
             return "You Win this game.\n -------";
           }
             if (playerScore==computerScore){
               return "This game is a tie.\n -------";
             }
            else{
             return "You Lose this game.\n -------";
           }
        }
        
        console.log(game()); //play the loop
        
        console.log( "Your final score is " +playerScore +" wins " +computerScore +" loses and " +tieScore +" draws.\n -------");
        
        score=playerScore+computerScore+tieScore;
        
        console.log("You played this game " +score +" times.\n -------\nGame over.");
        //count win lose or tie

const playGame = () => {

    const userChoice=getUserChoice('NUMNUM');
  
    const computerChoice=getComputerChoice();
  
  console.log(`Player choose ${userChoice}.
  
  Computer choose ${computerChoice}`);
  
   console.log(determineWinner(userChoice,computerChoice));
  
  };
  
  playGame();