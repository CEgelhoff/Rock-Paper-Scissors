function getComputerChoice(cChoice){
    cChoice = Math.floor(Math.random() * 3);
    console.log(cChoice);
    if (cChoice === 0){
        console.log("rock")
        cChoice = 'rock'
    }

    else if (cChoice === 1){
        console.log("paper")
        cChoice = 'paper'
    }

    else {
        console.log("scissors")
        cChoice = 'scissors'
    }

    return cChoice
}

function getPlayerChoice(pChoice){
    pChoice = prompt();
    return pChoice
}

function oneRound(c, p){
    c = getComputerChoice();
    p = getPlayerChoice();
    p = p.toLowerCase();

    console.log('c currently is:' + c + '.....while p currently is:' + p)


    if (p === c) console.log('Tie!')
    else if (p === 'paper' && c === 'rock') console.log('You chose ' + p + ' and the computer chose ' + c + '. You Win!')
    else if (p === 'rock' && c === 'paper') console.log('You chose ' + p + ' and the computer chose ' + c + '. You Lose!')
    else if (p === 'scissors' && c === 'rock') console.log('You chose ' + p + ' and the computer chose ' + c + '. You Lose!')
    else if (p === 'rock' && c === 'scissors') console.log('You chose ' + p + ' and the computer chose ' + c + '. You Win!')
    else if (p === 'paper' && c === 'scissors') console.log('You chose ' + p + ' and the computer chose ' + c + '. You Lose!')
    else if (p === 'scissors' && c === 'paper') console.log('You chose ' + p + ' and the computer chose ' + c + '. You Win!')
    else {console.log('Please input a valid option. (ex):Rock Paper or Scissors')}
}

oneRound();





