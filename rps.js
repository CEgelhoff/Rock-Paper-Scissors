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
        cChoice = 'rock';
        mageButton.style.color = ''
        rangeButton.style.color = ''
        meleeButton.style.color = '#0300a8'
    }

    else if (cChoice === '1'){
        cChoice = 'paper';
        mageButton.style.color = '#0300a8'
        rangeButton.style.color = ''
        meleeButton.style.color = ''
    }

    else {
        cChoice = 'scissors';
        mageButton.style.color = ''
        rangeButton.style.color = '#0300a8'
        meleeButton.style.color = ''
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


const button = document.querySelector('button');
const mageButton = document.querySelector('.mage')
const meleeButton = document.querySelector('.melee')
const rangeButton = document.querySelector('.range')

document.addEventListener("click", e => {
    if (e.target.matches(".mage")){
        result = playRound('paper', computerSelection = getComputerChoice())
        lightUp(result);
        buttonShadow(e);
        changeScore(result);
    }
    if (e.target.matches(".range")){
        result = playRound('scissors', computerSelection = getComputerChoice())
        lightUp(result);
        buttonShadow(e);
        changeScore(result);
    }
    if (e.target.matches(".melee")){
        result = playRound('rock', computerSelection = getComputerChoice())
        lightUp(result);
        buttonShadow(e);
        changeScore(result);
    }
})

const wBoard = document.querySelector('.youWin');
const lBoard = document.querySelector('.youLose');
const tBoard = document.querySelector('.youTied');
const pScore = document.querySelector('.pScore')
const cScore = document.querySelector('.cScore')


function lightUp(wlt){
    if(wlt === w){
        wBoard.style.opacity = '100%'
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

function buttonShadow(mySelection){
    mageButton.style.boxShadow = '0 0 0 #00ff40'
    rangeButton.style.boxShadow = '0 0 0 #00ff40'
    meleeButton.style.boxShadow = '0 0 0 #00ff40'
    mySelection.target.style.boxShadow = '0 0 20px #00ff40'
}

function changeScore(wlt){
    if(wlt === w){
        pWin++;
        pScore.innerText = pWin
        if(pWin === 5){
            alert('You were the first to score 5 wins! Good job!');
            pWin = 0;
            cWin = 0;
        }
        cScore.innerHTML = cWin
        pScore.innerText = pWin
    }
    else if (wlt === l){
        cWin++;
        cScore.innerHTML = cWin
        if(cWin === 5){
            alert('Your opponent was the first to score 5 wins! Try Again!');
            pWin = 0;
            cWin = 0;
            
        }
        cScore.innerHTML = cWin
        pScore.innerText = pWin
    }
    else{
        return;
    }
}

