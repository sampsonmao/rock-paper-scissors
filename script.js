function computerPlay(){
    let diceRollThreeSided = 1 + Math.floor(Math.random()*3);
    if (diceRollThreeSided == 1){
        return 'rock';
    }
    else if (diceRollThreeSided == 2){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function oneGame(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection=='rock' && computerSelection=='paper') {
        return {player: playerSelection, computer: computerSelection, result: 'lose'};
    }
    else if (playerSelection=='rock' && computerSelection=='scissors') {
        return {player: playerSelection, computer: computerSelection, result: 'win'};
    }    
    else if (playerSelection=='paper' && computerSelection=='rock') {
        return {player: playerSelection, computer: computerSelection, result: 'win'};
    }
    else if (playerSelection=='paper' && computerSelection=='scissors') {
        return {player: playerSelection, computer: computerSelection, result: 'lose'};
    }    
    else if (playerSelection=='scissors' && computerSelection=='paper') {
        return {player: playerSelection, computer: computerSelection, result: 'win'}
    }
    else if (playerSelection=='scissors' && computerSelection=='rock') {
        return {player: playerSelection, computer: computerSelection, result: 'lose'};
    }
    else if ((playerSelection=='rock' && computerSelection=='rock') || (playerSelection=='paper' && computerSelection=='paper') || (playerSelection=='scissors' && computerSelection=='scissors')) {
        return {player: playerSelection, computer: computerSelection, result: 'draw'}
    }
    else {
        return "Invalid input. Please enter rock, paper, or scissors."
    }
}

const buttons = document.querySelectorAll('button')   
buttons.forEach((button) => (button.addEventListener('click', playGame)))

let numWin = 0;
let numLose = 0;
let numDraw = 0

function playGame(e) {
    gameObject = oneGame(e.target.id)

    if (gameObject.result == 'win') {
        numWin += 1;
        document.getElementById("playerScore").textContent = numWin;
        document.getElementById("playerChoice").textContent = `You chose: ${gameObject.player}.`
        document.getElementById("computerChoice").textContent = `Computer plays: ${gameObject.computer}.`
        document.getElementById("result").textContent = "You win!"
    }
    else if (gameObject.result == 'lose') {
        numLose += 1;
        document.getElementById("computerScore").textContent = numLose;
        document.getElementById("playerChoice").textContent = `You chose: ${gameObject.player}.`
        document.getElementById("computerChoice").textContent = `Computer plays: ${gameObject.computer}.`
        document.getElementById("result").textContent = "You lose."
    }
    else if (gameObject.result == 'draw') {
        numDraw += 1;
        document.getElementById("drawScore").textContent = numDraw;
        document.getElementById("playerChoice").textContent = `You chose: ${gameObject.player}.`
        document.getElementById("computerChoice").textContent = `Computer plays: ${gameObject.computer}.`
        document.getElementById("result").textContent = "It's a draw!"
    }
    else {
        return
    }
}