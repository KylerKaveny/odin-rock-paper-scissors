
let computerScore = 0;
let playerScore = 0;
let roundResult = '';

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
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }


}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const rockButton = document.querySelector("button.rock-button");
rockButton.addEventListener("click", () => onClick("Rock"));

const paperButton = document.querySelector("button.paper-button");
paperButton.addEventListener("click", () => onClick("Paper"));

const scissorsButton = document.querySelector("button.scissors-button");
scissorsButton.addEventListener("click",  () => onClick("Scissors"));


function updateResultDisplay () {
    const displayResult = document.querySelector("div.displayResult");
    if (computerScore < 5 && playerScore < 5) {
        displayResult.innerHTML = roundResult + "<br/>" + "The current score is Player: " + playerScore +
        " Computer: " + computerScore;
    }
    else if (computerScore > playerScore) {
        displayResult.innerHTML = roundResult + "<br/>" + "The computer was the first to reach five wins! Sorry, you lose!";
    }

    else {
        displayResult.innerHTML = roundResult + "<br/>" + "You were the first to reach five wins! Congrats you win!";
    }
}

function onClick (playerChoice) {
    roundResult = (roundOfGame(playerChoice, getComputerChoice()));
    updateResultDisplay ();
}
/*
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

        //If player wins add 1 count to player's win count else add 1 count to 
        // computer's win count
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
*/