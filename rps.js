 // Rock Paper Scissors Game //    

// Declare score variables 
let computerScore = 0;
let playerScore = 0;

// Cache DOM elements 
const playerScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Function to get a random choice from computer 
function getComputerChoice() {
    const choices = ['r', 'p', 's'];    // Declare choices variable 
    const randomNumber = Math.floor(Math.random() * 3);   // Declare random choice variable // Math.random returns decimal // Math.floor makes it a whole number // 
    return choices[randomNumber];    // Returns a random letter from choices array 
}

// Function to convert letters in choices array to the full word 
function convertChoices(letter) {       
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}

// Function for action after player WINS
function win(userChoice, computerChoice) {      // Defines the win functions two choice parameters 
    const userChoice_div = document.getElementById(userChoice);   // Declare user choise variable 
    playerScore++;      // Player gains one point per win 
    playerScore_span.innerHTML = playerScore;     // Updates score board when player wins 
    computerScore_span.innerHTML = computerScore;  // Updates score board when computer wins 
    results_p.innerHTML = `${convertChoices(userChoice)} beats ${convertChoices(computerChoice)}. You win!`;   // Applying convertChoices funtion to the choices given by user and comp // add function and string using ES6 // Returns WINNER 
    userChoice_div.classList.add('green-glow');     // Adds class of green glow to users choice when user WINS 
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500 );    // Sets off timer to remove green glow 300 miliseconds after announcing WINNER 
}

// Function for action after player LOSES 
 function lose(userChoice, computerChoice) {        // Defines the lose function arguments 
    const userChoice_div = document.getElementById(userChoice);   // Declare user choise variable 
    computerScore++;      // Computer gains one point per win 
    playerScore_span.innerHTML = playerScore;     // Updates score board when player wins 
    computerScore_span.innerHTML = computerScore;  // Updates score board when computer wins 
    results_p.innerHTML = `${convertChoices(computerChoice)} beats ${convertChoices(userChoice)}. You lose!`;   // Applying convertChoices funtion to the choices given by user and comp // add function and string using ES6 // Returns LOSER
    userChoice_div.classList.add('red-glow');     // Adds class of red glow to users choice when user LOSES 
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500 );    // Sets off timer to remove green glow 300 miliseconds after announcing LOSER 

}

 // Funtion for action after player TIES with computer 
 function tie(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);   // Declare user choise variable 
    results_p.innerHTML = `${convertChoices(userChoice)} ties with ${convertChoices(computerChoice)}. It's a draw!`;    // Applying convertChoices funtion to the choices given by user and comp // add function and string using ES6 // Returns its a DRAW
    userChoice_div.classList.add('gray-glow');     // Adds class of gray glow to users choice when user TIES with computer 
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500 );    // Sets off timer to remove gray glow 300 miliseconds after announcing its a TIE  

}

// Function to play a round 
function game(userChoice) {
    const computerChoice = getComputerChoice();   // Declares computers choice variable 
    switch(userChoice + computerChoice) {        // Switch statement to decide results 
        case "rs":                       // Rock beats Scissors 
        case "pr":                       // Paper beats Rock 
        case "sp":                       // Scissors beat Paper 
            win(userChoice, computerChoice);      // Defines the win function arguments 
        break;
        case "rp":                      // Rock loses to Paper
        case "ps":                      // Paper loses to Scissors 
        case "sr":                      // Scissors loses to Rock 
            lose(userChoice, computerChoice);     // Defines the lose function arguments 
            break;
        case "rr":                      // Rock ties with Rock 
        case "pp":                      // Paper ties with Paper
        case "ss":                      // Scissors ties with Scissors 
            tie(userChoice, computerChoice);      // Defines the tie function arguments 
    }
}

// Function to add event listeners to DOM elements 
function main() {
    rock_div.addEventListener('click', () =>  game('r'));   // 
    paper_div.addEventListener('click', () => game('p'));   // 
    scissors_div.addEventListener('click', () => game('s'));    // 
};

main();   // Call funtion