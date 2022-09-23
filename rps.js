function getComputerChoice(){
    cChoice = Math.floor(Math.random() * 3);
    
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

/* function oneRound(c, p){
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
} */




function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return 'Tie!'
    else if (playerSelection === 'paper' && computerSelection === 'rock') return 'You Win!'
    else if (playerSelection === 'rock' && computerSelection === 'paper') return 'You Lose!'
    else if (playerSelection === 'scissors' && computerSelection === 'rock') return 'You Lose!'
    else if (playerSelection === 'rock' && computerSelection === 'scissors') return 'You Win!'
    else if (playerSelection === 'paper' && computerSelection === 'scissors') return 'You Lose!'
    else if (playerSelection === 'scissors' && computerSelection === 'paper') return 'You Win!'
    else {console.log('Please input a valid option. (ex):Rock Paper or Scissors')}
  }
   
  const playerSelection = 'paper';
  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));





