// Makes sure Javascript loads last to avoid errors
document.addEventListener("DOMContentLoaded", function() {

    // Initialize multiple variables 
    // Sets up EventListeners later on
    let rockChoice = document.getElementById('rock');
    let paperChoice = document.getElementById('paper');
    let scissorChoice = document.getElementById('scissors');

    let gameResult = document.getElementById('result');

    // Initialize variable to keep track of players choice
    let playerChoice;

    // Uses variable from above to give the div with the ID "rock" an EventListener that will set the playerChoice variable
    // to rock, as well as call the checkChoice function, passing in the playerChoice value. 
    rockChoice.addEventListener('click', function() {
        playerChoice = "rock";
        console.log("Rock clicked");
        checkChoice(playerChoice);
    });

    // Similar to above
    paperChoice.addEventListener('click', function() {
        playerChoice = "paper";
        console.log("Paper clicked")
        checkChoice(playerChoice);
    });

    // Similar to above
    scissorChoice.addEventListener('click', function() {
        playerChoice = "scissors";
        console.log("Scissors clicked");
        checkChoice(playerChoice);
    });
    
    // Initialize array that will allow computer to index with the Math.random function, choosing a random choice.
    let choiceArray = ["rock", "paper", "scissors" ];

    /* Purpose: Generate a random index, and use it to index a random element from the choiceArray. Compare it to playerChoice.
    *  Input: playerChoice (string)
    *  Output: Console output of win or loss.
    */ 
    function checkChoice(playerChoice) {
        let computerChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
        
        // if (playerChoice == choiceArray[computerChoice]) {
        //     console.log("You Win!\n");
        //     console.log(" ");
        //     gameResult.innerHTML = "You Win!";
        // } else {
        //     console.log("You Loose!\n");
        //     console.log(" ");
        //     gameResult.innerHTML = "You Loose...";
        // }

        if (playerChoice == computerChoice) {
            console.log("Computer chose: " + computerChoice);
            console.log("It's a tie!");
            console.log(" ")
            gameResult.innerHTML = "It's a tie!\n"
        } else if ((playerChoice == "rock" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "rock")){
            console.log("Computer chose: " + computerChoice);
            console.log("You loose...");
            console.log(" ")
            gameResult.innerHTML = "You loose...\n"
        } else {
            console.log("Computer chose: " + computerChoice);
            console.log("You Win!");
            console.log(" ")
            gameResult.innerHTML = "You win!\n"
        }
    }
});