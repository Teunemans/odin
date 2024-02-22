function getComputerChoice() {
    returns = ["rock", "paper", "scissors"]
    return returns[Math.floor(Math.random() * 3)]
}

function playRound(computerSelection, playerInput) {
    let playerSelection = playerInput.toLowerCase()
    if (computerSelection == playerSelection) {
        return "draw"
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lost!, " + computerSelection + " beats " + playerSelection
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You lost!, " + computerSelection + " beats " + playerSelection
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You lost!, " + computerSelection + " beats " + playerSelection
    } else {
        return "You won!, " + playerSelection + " beats " + computerSelection
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), prompt("Please enter your choice: "))
    }
}

playGame()