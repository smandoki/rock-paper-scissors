const choice = {
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

