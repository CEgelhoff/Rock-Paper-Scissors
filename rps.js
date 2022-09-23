function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    let cChoice = num.toString();

    if (cChoice === '0'){
        console.log("Computer chose rock");
        cChoice = 'rock';
    }

    else if (cChoice === '1'){
        console.log("Computer chose paper");
        cChoice = 'paper';
    }

    else {
        console.log("Computer chose scissors");
        cChoice = 'scissors';
    }

    return cChoice;
}

function getPlayerChoice(pChoice = '')
{
    console.log('Geting player choice')
    pChoice = prompt('Enter rock, paper, or scissors');
    pChoice = pChoice.toLowerCase();
    console.log('I chose ' + pChoice)
    return pChoice;
}

function playRound(pSelection, cSelection)
{
    if(pSelection === cSelection)
    {
        console.log('Tie');
        return t;
    }
    else if(pSelection === 'paper' && cSelection === 'rock')
    {
        console.log('Win');
        return w;
    }
    else if(pSelection === 'paper' && cSelection === 'scissors')
    {
        console.log('Lose');
        return l;

    }
    else if(pSelection === 'rock' && cSelection === 'paper')
    {
        console.log('Lose');
        return l;
    }
    else if(pSelection === 'rock' && cSelection === 'scissors')
    {
        console.log('Win');
        return w;
    }
    else if(pSelection === 'scissors' && cSelection === 'rock')
    {
        console.log('Lose');
        return l;
    }
    else if(pSelection === 'scissors' && cSelection === 'paper')
    {
        console.log('Win');
        return w;
    }
    else{console.log('Please input a valid option. (ex):Rock Paper or Scissors');}
}
   
let playerSelection = '';
let computerSelection = '';
const t = 'tie'
const w = 'win'
const l = 'lose'


function game(){
    let cWin = 0;
    let pWin = 0;
    let result = t;

    for (let i = 0; i < 5; i++){

        result = playRound(playerSelection = getPlayerChoice(), computerSelection = getComputerChoice())

        if (result === w)
        {
            pWin++;
            console.log('Your score is: ' + pWin);
            console.log('Computer score is: ' + cWin);
        }
        else if (result === l)
        {
            cWin++;
            console.log('Your score is: ' + pWin);
            console.log('Computer score is: ' + cWin);
        } 
        else if(result === t)
        {
        console.log('Its a tie! Scores stay the same!');
        }
        else
        {
            console.log("error with game result")
        }

        if (i<4)
        {
        console.log('*******************');
        console.log('*******************');
        console.log('*******************');
        console.log('*******************');
        console.log('*******************');
        console.log('*******************');
        console.log('*******************');
        console.log('*******************');
        console.log('Next Round!');
        }

    }

    console.log('****FINAL SCORE****');
    console.log('Player score:' + pWin);
    console.log('Computer score:' + cWin);
}

game();





