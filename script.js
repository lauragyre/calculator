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
    done = true;
    return answer;
}

keypad.addEventListener('click', () => {
    for (let i = 0; i < buttons.length; i++) {
        
       buttons[i].style.opacity = '100%'; 
       
    }
    keypad.style.opacity = '100%';
    event.target.style.opacity = '75%';
    if (event.target.id >= 0 && event.target.id <= 9) {
        if (done == true) {
            display.innerHTML = "ERROR";
        } else {
        //setValue(event.target.id);
        if (operation) { numB.push(parseInt(event.target.id)); 
            if (parseInt(numB.join("")) > 99999999) {display.innerHTML = "ERROR";}
            else {
            display.innerHTML = numB.join("");
            }

        }
            else { numA.push(parseInt(event.target.id));
                if (parseInt(numA.join("")) > 99999999) {display.innerHTML = "ERROR";}
                else {console.log('numA' + numA + 'numB' + numB);
                display.innerHTML = numA.join("");
            }
            }
    }}

    else if (event.target.id == '+') {
        if (operation) {operate(operation, parseInt(numA.join("")), parseInt(numB.join("")));}        
        operation = '+'; done = false;}
    else if (event.target.id == '-') {
        if (operation) {operate(operation, parseInt(numA.join("")), parseInt(numB.join("")));}   
        operation = '-'; done = false;}
    else if (event.target.id == '*') {
        if (operation) {operate(operation, parseInt(numA.join("")), parseInt(numB.join("")));}   
        operation = '*'; done = false;}
    else if (event.target.id == '/') {
        if (operation) {operate(operation, parseInt(numA.join("")), parseInt(numB.join("")));}   
        operation = '/'; done = false;}
    else if (event.target.id == '=') {console.log(numA + "    " + operation + "      " + numB);
        if (numA && numB && operation) { 
            console.log('parseInt(numA.join("")) =' + parseInt(numA.join(""))); 
            operate(operation, parseInt(numA.join("")), parseInt(numB.join("")));
            operation = null;
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









