//Initalize getComputerChoice function

function getComputerChoice() {
    //Initalize an array of rock, paper, or scissors
    const arrOfRockPaperScissors = ["Rock", "Paper", "Scissors"]
    //Return a random rock paper or scissors.
    return arrOfRockPaperScissors[Math.floor(arrOfRockPaperScissors.length * Math.random())]
}

function roundOfGame (playerSelection, computerSelection) {
    playerSelection = capitalizeFirstLetter(playerSelection.toLowerCase());
    computerSelection = capitalizeFirstLetter(computerSelection.toLowerCase());
    if (playerSelection === computerSelection) {
        return "This round is a tie"
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }


}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Play a game of rock-paper-scissors
//Initalize the function
function playGame() {
    //Initalize message for user prompt
    const message = "Please input your rock-paper-scissors hand: ";
    //counters to keep track of wins
    let computerWinCount = 0;
    let playerWinCount = 0;
    //For loop to run five rounds of the game
    for (let i = 0; i < 5; i++) {
        //Play one round
        let playerSelection = prompt(message);
        let computerChoice = getComputerChoice();
        let gameRoundResult = roundOfGame(playerSelection, computerChoice);
        console.log(gameRoundResult);

        //If player wins add 1 count to player's win count else add 1 count to computer's win count
        if (gameRoundResult.charAt(4) === "w") {
            playerWinCount++;
        }
        else if (gameRoundResult.charAt(4) === "l") {
            computerWinCount++;
        }
    }
    if (computerWinCount > playerWinCount) {
        return "You lost the best out of five.";
    }
    else if (computerWinCount < playerWinCount) {
        return "You won the best out of five.";
    }
    else {
        return "It was a tie out of five.";
    }
}