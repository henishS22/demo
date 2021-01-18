const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const defaultUserChoice = 'ROCK';
let playerChoice;
let compChoice;

let total = 0;
let userWinCount = 0;
let compWinCount = 0;
let tied = 0;

function startGame(){
    let playerValue = prompt("Enter choice").toUpperCase();
    playerChoice = playerValue;
    if(playerChoice != ROCK && playerChoice != PAPER && playerChoice != SCISSOR )
    {
        alert(`Invalid choice, We choosen ${ROCK} for you. `);
        playerChoice = defaultUserChoice;
    }
    console.log(playerChoice);
    total = total + 1;
    computerChoice();
}

function computerChoice(){
    var ranSelect = [1,2,3];
    var randomVal = ranSelect[Math.floor(Math.random()*ranSelect.length)];
    if(randomVal == 1){
        compChoice = ROCK;
    } else if(randomVal == 2){
        compChoice = PAPER;
    } else{
        compChoice = SCISSOR;
    }
    console.log("Computer Coice : "+compChoice);
    gameWinner();
}

function gameWinner(){
    if (playerChoice===compChoice){
        console.log("Draw");
        tied = tied+1;
        gameResult();
    } else if(playerChoice === ROCK && compChoice === SCISSOR || 
        playerChoice === PAPER && compChoice === ROCK ||
        playerChoice === SCISSOR && compChoice === PAPER){
            console.log("You Win");
            userWinCount = userWinCount+1;
            gameResult();
        } else {
            console.log("You Lost");
            compWinCount = compWinCount+1;
            gameResult();
        }
}

function gameResult(){
    console.log(total,userWinCount,compWinCount,tied);
}

const startBtn = document.getElementById('start');
startBtn.addEventListener('click',startGame);