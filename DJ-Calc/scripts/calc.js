const userInput = document.getElementById('user-input');
function disp(val){
    let enterNum = userInput.value.toString();
    //let obj ={};
    // if(val == '+' || val == '-' || val == '*' || val == '/'){
    //     obj = {
    //         operator: val,
    //         preRes: enterNum,
    //         num: ,
    //         res: 
    //     }
    // }
    let newNum = enterNum + val;
    userInput.value = newNum;    
}

function res(){
    let x = document.getElementById('user-input').value;
    let y = eval(x);
    document.getElementById("user-input").value = y;
}

function clr(){
    document.getElementById('user-input').value = "";
}