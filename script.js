const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
};

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const humanPlay = (humanChoice) => {

    playTheGame(humanChoice, machinePlay())
};

const machinePlay = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
};

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + 'Maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = "😐 Empate! 😐"
        result.style.color = "green"
        result.style.transition = "0.7s ease-in-out"
        result.style.fontSize = "27px"
    } else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
        ) {
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "🔥 Você ganhou! 🔥"
        result.style.color = "blue"
        result.style.transition = "0.7s ease-in-out"
        result.style.fontSize = "30px"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "😨 Você perdeu! 😨"
        result.style.color = "red"
        result.style.transition = "0.7s ease-in-out"
        result.style.fontSize = "24px"
    }
};

const backgroundMusic = document.querySelector(".background-music");
backgroundMusic.volume = 0.1;
backgroundMusic.autoplay = true;
backgroundMusic.loop = true;