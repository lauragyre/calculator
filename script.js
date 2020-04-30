let display = document.querySelector('#display');
let buttons = document.querySelectorAll('.buttons');
let keypad = document.querySelector('#keypad');
let clear = document.querySelector('#clear');


let keyValue;
let operation;
let numA = [];
let numB = [];
let done = false;
let displayNum = []

//let setValue = function (num) {
  //  keyValue = num;
  //  displayNum.push(keyValue);
    //if (parseInt(displayNum.join("")) > 99999999) {display.innerHTML = 'ERROR';}
    //else {display.innerHTML = number(displayNum).toPrecision(0,8);}
//}

let add = (a, b) => {
    return a+b;
    
}
let subtract = (a, b) => {
    return a-b;
}
let multiply = (a, b) => {
    return a*b;
}
let divide = (a, b) => {
    return a/b;
}

let operate = (operator, a, b) => {
    let answer;
    if (operator == "+") {answer = add(a,b);}
    else if (operator == "-") {answer = subtract(a,b);}
    else if (operator == "*") {answer = multiply(a,b);}
    else if (operator == "/") {answer = divide(a,b);}
    console.log(answer);
    displayNum = [answer];
    numA = [answer];
    console.log('numA =' + numA);
    numB = [];
    

    if (answer > 99999999) {display.innerHTML = 'ERROR';}
    else {display.innerHTML = parseFloat(answer.toPrecision(8));}

    operation = null;
    done = true;
    return answer;
}

keypad.addEventListener('click', () => {
    for (let i = 0; i < buttons.length; i++) {
        
       buttons[i].style.opacity = '100%'; 
    }
    event.target.style.opacity = '75%';
    if (event.target.id >= 0 && event.target.id <= 9) {
        if (done == true) {
            display.innerHTML = "ERROR";
        } else {
        //setValue(event.target.id);
        if (operation) { numB.push(parseInt(event.target.id)); 
            console.log('numA' + numA + 'numB' + numB);
            display.innerHTML = numB;

        }
            else { numA.push(parseInt(event.target.id));
                console.log('numA' + numA + 'numB' + numB);
                display.innerHTML = numA;

            }
    }}
    //if (event.target.id == 0) {setValue(0);}
    //else if (event.target.id == 1) {setValue(1);}
    //else if (event.target.id == 2) {setValue(2);}
    //else if (event.target.id == 3) {setValue(3);}
    //else if (event.target.id == 4) {setValue(4);}
    //else if (event.target.id == 5) {setValue(5);}
    //else if (event.target.id == 6) {setValue(6);}
    //else if (event.target.id == 7) {setValue(7);}
    //else if (event.target.id == 8) {setValue(8);}
    //else if (event.target.id == 9) {setValue(9);}
    else if (event.target.id == '+') {operation = '+'; done = false;}
    else if (event.target.id == '-') {operation = '-'; done = false;}
    else if (event.target.id == '*') {operation = '*'; done = false;}
    else if (event.target.id == '/') {operation = '/'; done = false;}
    else if (event.target.id == '=') {console.log(numA + "    " + operation + "      " + numB);
        if (numA && numB && operation) { 
            console.log('parseInt(numA.join("")) =' + parseInt(numA.join(""))); 
            operate(operation, parseInt(numA.join("")), parseInt(numB.join("")));
        } else {display.innerHTML = "ERROR";}
    }
    }
     

)

clear.onclick = () => {
    displayNum = [];
    display.innerHTML = displayNum;
    numA = [];
    numB = [];
    operation = null;
    keyValue = null;
    done = false;
}









