const choice = {
    0: 'rock',
    1: 'paper',
    2: 'scissors'
}

const resultParagraph = document.querySelector('p');

let wins = 0;
let loss = 0;

function getComputerChoice(){
    return getRandInt(0, 2);
}

function getRandInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(playerChoice, computerChoice){
    if ((playerChoice + 1) % 3 === computerChoice){
        loss++;
        return `You Lose! ${choice[computerChoice]} beats ${choice[playerChoice]}`;
    }

    if ((playerChoice + 2) % 3 === computerChoice){
        wins++;
        return `You Win! ${choice[playerChoice]} beats ${choice[computerChoice]}`;
    }

    return `Draw! ${choice[playerChoice]} ties ${choice[computerChoice]}`;
}

const choices = document.querySelectorAll('img');

choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        e.target.classList.add('clicked');

        const playerChoice = Number(e.target.id);
        const computerChoice = getComputerChoice();

        let result = playRound(playerChoice, computerChoice);
        result += `\nPlayer: ${wins} | Computer: ${loss}`

        if (wins === 5 || loss === 5) {
            result = wins === 5 ? `You Win! ${wins}-${loss}` : `Computer Wins ${loss}-${wins}`;
            result += '\nPress rock, paper, or scissors to play a new game'
            wins = 0;
            loss = 0;
        }

        resultParagraph.innerText = result;
    });

    choice.addEventListener('transitionend', (e) => {
        e.target.classList.remove('clicked');
    });
});