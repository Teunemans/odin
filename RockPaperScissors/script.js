let playerScore = 0
let computerScore = 0
const playerScoreCounter = document.getElementById("playerScore")
const computerScoreCounter = document.getElementById("computerScore")
playerScoreCounter.textContent = String(playerScore)
computerScoreCounter.textContent = String(computerScore)

function getComputerChoice() {
    let returns = ["rock", "paper", "scissors"]
    return returns[Math.floor(Math.random() * 3)]
}


function playRound(computerSelection, playerInput) {
    let playerSelection = playerInput.toLowerCase()
    playerScoreCounter.textContent = String(playerScore)
    computerScoreCounter.textContent = String(computerScore)
    if (computerSelection === playerSelection) {
        return "draw, you both chose " + playerSelection + "!"
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++
        return "you lost! " + computerSelection + " beats " + playerSelection
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++
        return "you lost! " + computerSelection + " beats " + playerSelection
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++
        return "you lost! " + computerSelection + " beats " + playerSelection
    } else {
        playerScore++
        return "You won! " + playerSelection + " beats " + computerSelection
    }
}

const resultDiv = document.getElementById("resultDiv")

function checkScores() {
    if (playerScore >= 5 || computerScore >= 5 && playerScore > computerScore) {
        resultDiv.textContent = "You won!"
    } else if (playerScore >= 5 || computerScore >= 5 && playerScore < computerScore) {
        resultDiv.textContent = "The computer won :("
    }
}
function roundButton(input) {
    resultDiv.textContent = playRound(getComputerChoice(), input)
    checkScores()
}
