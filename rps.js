let cWin = 0;
let pWin = 0;
let result = '';
let playerSelection = '';
let computerSelection = '';
const t = 'tie'
const w = 'win'
const l = 'lose'

function getComputerChoice(){ // rolling a number and returning the resulting number
                              // as a choice for the computers pick
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

function playRound(pSelection, cSelection)
{
    if(pSelection === cSelection)
    {
        return t;
    }
    else if(pSelection === 'paper' && cSelection === 'rock')
    {
        return w;
    }
    else if(pSelection === 'paper' && cSelection === 'scissors')
    {
        return l;

    }
    else if(pSelection === 'rock' && cSelection === 'paper')
    {
        return l;
    }
    else if(pSelection === 'rock' && cSelection === 'scissors')
    {
        return w;
    }
    else if(pSelection === 'scissors' && cSelection === 'rock')
    {
        return l;
    }
    else if(pSelection === 'scissors' && cSelection === 'paper')
    {
        return w;
    }
    else{console.log('Please input a valid option. (ex):Rock Paper or Scissors');}
}
function game(){


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
}


const buttons = document.querySelector('button');
document.addEventListener("click", e => {
    if (e.target.matches(".mage")){
        console.log('mage')
        result = playRound('paper', computerSelection = getComputerChoice())
        lightUp(result);
    }
    if (e.target.matches(".range")){
        console.log('range')
        result = playRound('scissors', computerSelection = getComputerChoice())
        lightUp(result);
    }
    if (e.target.matches(".melee")){
        e.style.border = '3px solid red'
        result = playRound('rock', computerSelection = getComputerChoice())
        lightUp(result);
    }
})

const wBoard = document.querySelector('.youWin');
const lBoard = document.querySelector('.youLose');
const tBoard = document.querySelector('.youTied');


function lightUp(wlt){
    if(wlt === w){
        wBoard.style.opacity = '100%';
        lBoard.style.opacity = '10%'
        tBoard.style.opacity = '10%'
    }
    else if(wlt === l){
        wBoard.style.opacity = '10%'
        lBoard.style.opacity = '100%'
        tBoard.style.opacity = '10%'
    }
    else{
        wBoard.style.opacity = '10%'
        lBoard.style.opacity = '10%'
        tBoard.style.opacity = '100%'
        /* tBoard.setAttribute('opacity', '100%')*/
    } 
}


