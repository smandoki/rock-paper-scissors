const choice = {
    0: 'Rock',
    1: 'Paper',
    2: 'Scissors',
    'rock': 0,
    'paper': 1,
    'scissors': 2,
}

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

function game(){
    for (let i = 0; i < 5; i++){
        const userInput = prompt('Enter rock, paper, or scissors').toLowerCase();
        const playerChoice = choice[userInput];
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }

    if (wins > loss) {
        console.log('You Win!');
    } else if (wins < loss){
        console.log('You Lose!');
    } else {
        console.log('Draw!');
    }

    console.log(`Player: ${wins}, Computer: ${loss}`);
}

game();