// const chosenMaxLife = 100;
var chosenMaxLife;
let attackValuePlayer = 10;
let strongAttack = 20;
let attackValueMonster = 17;
var totalCount = 0;
var userWinCount = 0;
var monsterWinCount = 0;
var bonusCount = 1;

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

var battleLog = [];
var userEnteredHealth = prompt("Enter Max Health for Game ","100");
chosenMaxLife = parseInt(userEnteredHealth);

if(isNaN(chosenMaxLife) || chosenMaxLife<=0)
{
    chosenMaxLife = 100;
}

var currPlayerhealth = chosenMaxLife;
var currMonsterhealth = chosenMaxLife;

healthProgress(chosenMaxLife);

function reset()
{   
    totalCount = totalCount+1;
    // console.log(bonusCount);
    // console.log(totalCount);
    // console.log(userWinCount);
    // console.log(monsterWinCount);
    currPlayerhealth = chosenMaxLife;
    currMonsterhealth = chosenMaxLife;
    totalGame.innerHTML = totalCount;
    winGame.innerHTML = userWinCount;
    lostGame.innerHTML = monsterWinCount;
    resetGame(chosenMaxLife);
}

function attackMonster(power){
    var maxDamage;
    if(power === 'ATTACK')
    {
        maxDamage = attackValuePlayer;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    }
    else if(power === 'STRONG_ATTACK')
    {
        maxDamage = strongAttack;
        logEvent = LOG_EVENT_STRONG_ATTACK;
    }
    
    const damage = dealMonsterDamage(maxDamage);
    currMonsterhealth = currMonsterhealth-damage;
    monsterHealthBar.value = currMonsterhealth;
    writeToLog(logEvent, damage, currMonsterhealth, currPlayerhealth);
    

    const playerdamage = dealPlayerDamage(attackValueMonster);
    currPlayerhealth = currPlayerhealth-playerdamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerdamage, currMonsterhealth, currPlayerhealth);
    playerHealthBar.value = currPlayerhealth;

    if(currMonsterhealth<=0 && currPlayerhealth>0)
    {
        alert("You Won !");
        writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currMonsterhealth, currPlayerhealth);
        userWinCount = userWinCount+1;
        bonusCount = bonusCount+1;
        bonus.innerHTML = bonusCount;
    }
    else if(currPlayerhealth<=0 && currMonsterhealth>0)
    {
        alert("You Lost !");
        writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currMonsterhealth, currPlayerhealth);
        monsterWinCount = monsterWinCount + 1;
    }
    else if (currPlayerhealth<=0 && currMonsterhealth<=0){
        alert("Match Draw !");
        writeToLog(LOG_EVENT_GAME_OVER, 'GAME TIED', currMonsterhealth, currPlayerhealth);
    }

    if(currMonsterhealth<=0 && currPlayerhealth>0 || 
        currPlayerhealth<=0 && currMonsterhealth>0 ||
        currPlayerhealth<=0 && currMonsterhealth<=0)
        {
            // healthProgress(chosenMaxLife);
            reset();
        }
}

function attackHandler()
{
    attackMonster('ATTACK');
}

function strongAttackHandler()
{
    attackMonster('STRONG_ATTACK');
}

function healHealth(){
    var healValue = 0;
    healValue = chosenMaxLife-currPlayerhealth;
    console.log(healValue);
    if(bonusCount >= 1)
    {
        var healthValue = playerHealthBar.value;
        if(healthValue === chosenMaxLife)
        {
            alert("You are at you Max Health life, Can't Heal ! ");
        }
        else{
            currPlayerhealth = chosenMaxLife;
            playerHealthBar.value = currPlayerhealth;
            attackValuePlayer = 5;
            strongAttack = 10;
            bonusCount = bonusCount-1; 
            bonus.innerHTML = bonusCount;   
        }
    }
    else if(bonus.innerHTML == 0)
    {
        alert("You have no bonus Life");
    }
    writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currMonsterhealth, currPlayerhealth);
}

function writeToLog(ev, val, currMonsterhealth, currPlayerhealth)
{
    let logEntry, finalMonsterHealth, finalPlayerHealth;
    if(ev == LOG_EVENT_PLAYER_ATTACK)
    {
        logEntry = {
            event: ev,
            value: val,
            target: 'MONSTER',
            finalMonsterHealth: currMonsterhealth,
            finalPlayerHealth: currPlayerhealth,
        };
        
    } else if(ev == LOG_EVENT_STRONG_ATTACK){
        logEntry = {
            event: ev,
            value: val,
            target: 'MONSTER',
            finalMonsterHealth: currMonsterhealth,
            finalPlayerHealth : currPlayerhealth,
        };
        
    } else if(ev == LOG_EVENT_MONSTER_ATTACK){
        logEntry = {
            event: ev,
            value: val,
            target: 'PLAYER',
            finalMonsterHealth: currMonsterhealth,
            finalPlayerHealth: currPlayerhealth,
        };
        
    } else if(ev == LOG_EVENT_PLAYER_HEAL){
        logEntry = {
            event: ev,
            value: val,
            target: 'PLAYER',
            finalMonsterHealth: currMonsterhealth,
            finalPlayerHealth: currPlayerhealth,
        };
        
    } else if(ev == LOG_EVENT_GAME_OVER){
        logEntry = {
            event: ev,
            value: val,
            target: 'PLAYER',
            finalMonsterHealth: currMonsterhealth,
            finalPlayerHealth: currPlayerhealth,
        };
        
    }
    battleLog.push(logEntry);
}

function printLog(){
    console.log(battleLog);
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healHealth);
logBtn.addEventListener('click',printLog);
