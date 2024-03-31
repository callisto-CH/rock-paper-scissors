// Create a function getComputerChoice which chooses R, P, or S randomly for computer
function getComputerChoice() {
    // Generate a random number out of three possibilities
    let randomNum = Math.floor(Math.random() * 3)
    // Return rock, paper, or scissors depending on this number
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
// & computer input
function playRound(playerSelection, computerSelection) {
    // playerSelection needs to be case-insensitive. Make the string lower case.
    playerSelection = playerSelection.toLowerCase()
    // If equal, it's a tie. Do not increment either score. Show result.
    if (playerSelection === computerSelection) {
        return `This round is a tie between ${playerSelection} and ${computerSelection}!`
    }
    // If player wins, increment player score and show result of round.
    else if ((playerSelection === `rock` && computerSelection === `scissors`) ||
        (playerSelection === `paper` && computerSelection === `rock`) ||
        (playerSelection === `scissors` && computerSelection === `paper`)) {
            playerScore += 1;
            return `You win this round! Your ${playerSelection} beats the computer's ${computerSelection}!`
        }
    // If computer wins, increment computer score and show result of round.
    else {
        computerScore += 1;
        return `You lose this round. The computer's ${computerSelection} beats your ${playerSelection}.`
    }
}

// Create a function that plays a full five rounds of RPS using the above function
function playGame() {
    // Play five rounds and log result of each round
    console.log(playRound(prompt(`Choose rock, paper, or scissors: `, ``), getComputerChoice()))
    console.log(`Player score: ${playerScore} --- Computer score: ${computerScore}`)
    console.log(playRound(prompt(`Choose rock, paper, or scissors: `, ``), getComputerChoice()))
    console.log(`Player score: ${playerScore} --- Computer score: ${computerScore}`)
    console.log(playRound(prompt(`Choose rock, paper, or scissors: `, ``), getComputerChoice()))
    console.log(`Player score: ${playerScore} --- Computer score: ${computerScore}`)
    console.log(playRound(prompt(`Choose rock, paper, or scissors: `, ``), getComputerChoice()))
    console.log(`Player score: ${playerScore} --- Computer score: ${computerScore}`)
    console.log(playRound(prompt(`Choose rock, paper, or scissors: `, ``), getComputerChoice()))
    console.log(`Player score: ${playerScore} --- Computer score: ${computerScore}`)
    // Annonce winner at the end of five rounds
    if (playerScore === computerScore) {
        console.log(`It's a tie!`)
    }
    else if (playerScore > computerScore) {
        console.log(`You win the game!`)
    }
    else {
        console.log(`You lose the game.`)
    }
}

// Set both player and computer score to zero, and begin game.
let playerScore = 0;
let computerScore = 0;
console.log(`It's a best of five rock paper scissors match against the computer!`)
playGame()