let playerScore = 0,
    computerScore = 0,
    roundNumber = 1;

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", buttonHandler);
})

function buttonHandler(e) {
    playGame(e.target.textContent.toLowerCase(), getComputerChoice())
}

// Create a function which chooses R, P, or S randomly for computer
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return "rock"
    }
    else if (randomNum === 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

// Create a function that computes the result of a single round of RPS using player
// & computer input and displays the result on page
function playGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const resultsDisplay = document.querySelector(".results");
    const result = document.createElement("p");
    const score = document.createElement("p");
    if (playerSelection === computerSelection) {
        result.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}. This round is a tie!`
    }
    else if ((playerSelection === `rock` && computerSelection === `scissors`) ||
        (playerSelection === `paper` && computerSelection === `rock`) ||
        (playerSelection === `scissors` && computerSelection === `paper`)) {
        playerScore += 1;
        result.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}. You win this round!`;
        }
    else {
        computerScore += 1;
        result.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}. You lose this round.`;
    };
    score.textContent = `Player score: ${playerScore} --- Computer score: ${computerScore}`;
    resultsDisplay.appendChild(result);
    resultsDisplay.appendChild(score);
    if (roundNumber == 5) {
        const winnerDisplay = document.createElement("p");
        if (playerScore > computerScore) {
            winnerDisplay.textContent = `You won the game!`
        }
        else if (playerScore < computerScore) {
            winnerDisplay.textContent = `The computer wins the game.`
        }
        else {
            winnerDisplay.textContent = `The winner is... no one! The scores are tied.`
        }
        resultsDisplay.appendChild(winnerDisplay);
        buttons.forEach((button) => {
            button.removeEventListener("click", buttonHandler)
        })
    }
    roundNumber += 1;
}