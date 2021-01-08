// const defaultResult = 0
// let currResult = defaultResult;

// function getUserInput(){
//     return parseInt(userInput.value);
// }

// function createAndwriteOutput(operator, resultBefore,newNumber, resultAfter){
//     const calcDescription = `${resultBefore} ${operator} ${resultAfter}`;   
//     outputResult(currResult,calcDescription);
// }

// function add(){
//     // const enterNum = getUserInput();
//     // userInput.value = '+';
//     // const initialNum = currResult;
//     // // const calcDescription = `${currResult} + ${enterNum}`;
//     // currResult = currResult + enterNum;
//     // // outputResult(currResult,calcDescription);
//     // createAndwriteOutput('+',initialNum,enterNum);
//     const enterNum = parseInt(userInput.value);
//     outputResult('+')
// }

// function subtract(){
//     const enterNum = getUserInput();
//     const initialNum = currResult;
//     // const calcDescription = `${currResult} - ${enterNum}`;
//     currResult = currResult - enterNum;
//     // outputResult(currResult,calcDescription);
//     createAndwriteOutput('-',initialNum,enterNum)
// }

// function mul(){
//     const enterNum = getUserInput();
//     const initialNum = currResult;
//     // const calcDescription = `${currResult} - ${enterNum}`;
//     currResult = currResult * enterNum;
//     // outputResult(currResult,calcDescription);
//     createAndwriteOutput('*',initialNum,enterNum)
// }

// function division(){
//     const enterNum = getUserInput();
//     const initialNum = currResult;
//     // const calcDescription = `${currResult} - ${enterNum}`;
//     currResult = currResult / enterNum;
//     // outputResult(currResult,calcDescription);
//     createAndwriteOutput('/',initialNum,enterNum)
// }

// addBtn.addEventListener('click',add);
// subBtn.addEventListener('click',subtract);
// mulBtn.addEventListener('click',mul);
// divBtn.addEventListener('click',division);


logEntries = [];

const userInput = document.getElementById('user-input');
function show(val){
    let enterNum = userInput.value.toString();
    let newNum = enterNum + val;
    userInput.value = newNum;
    // console.log(newNum);
}

function ans(){
    let x = document.getElementById('user-input').value;
    let y = eval(x) 
    logEntries.push(x  + '=' + y);
    document.getElementById("user-input").value = y 
    console.log(y);
    console.log(logEntries);
}

function clr(){
    document.getElementById('user-input').value = "";
}

function back(){
    var txt = document.getElementById('user-input').value;
    document.getElementById('user-input').value = txt.slice(0,-1);
    
}