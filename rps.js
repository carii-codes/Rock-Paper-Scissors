 // Rock Paper Scissors Game //    

// Declare score variables 
const computerScore = 0;
const playerScore = 0;

// Cache DOM elements 
const playerScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const results_div = document.querySelector(".results");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Function to get a random choice from computer 
function getComputerChoice() {
    const choices = ['r', 'p', 's'];    // Declare choices variable 
    const randomNumber = (Math.floor(Math.random() * 3));   // Declare random choice variable // Math.random returns decimal // Math.floor makes it a whole number // 
    return choices[randomNumber];    // Returns a random letter from choices array 
}

// Function to play a round 
function game(userChoice) {
    const computerChoice = getComputerChoice();   // Declare computers choice variable 
    switch(userChoice + computerChoice) {        // Switch statement to decide results 
        case "rs":                       // Rock beats Scissors 
        case "ps":                       // Paper beats Scissors 
        case "sp":                       // Scissors beat Paper 
            console.log("YOU WIN!");
        break;
        case "rp":                      // Rock loses to Paper
        case "ps":                      // Paper loses to Scissors 
        case "sr":                      // Scissors loses to Rock 
            console.log("YOU LOSE!");
            break;
        case "rr":                      // Rock ties with Rock 
        case "pp":                      // Paper ties with Paper
        case "ss":                      //Scissors ties with Scissors 
            console.log("IT'S A TIE!");
    }
}

// Function to add event listeners to DOM elements 
function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    })

    paper_div.addEventListener('click', function() {
        game('p');
    })

    scissors_div.addEventListener('click', function() {
        game('s');
    })
};

main();   // Call funtion