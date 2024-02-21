function getComputerChoice() {
    returns = ["rock", "paper", "scissors"]
    return returns[Math.floor(Math.random() * 3)]
}

let playerSelection = document.getElementById("input").innerText.toLowerCase

function playRound(computerSelection, playerSelection) {
    if (computerSelection !== playerSelection) {
        return "draw"
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lost!, " + computerSelection + " beats " + playerSelection
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You lost!, " + computerSelection + " beats " + playerSelection
    } else if (computerSelection === "paper" && playerSelection === "rock")
        return "You lost!, " + computerSelection + " beats " + playerSelection
    }else {
        return "You lost!, " + playerSelection + " beats " + computerSelection
    };
}

console.log(playRound(getComputerChoice(), "scissors"))