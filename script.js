let display = document.querySelector('#display');
let buttons = document.querySelectorAll('.buttons');
let keypad = document.querySelector('#keypad');

let displayNum = []
display.innerHTML = displayNum;

let keyValue;

keypad.addEventListener('click', () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.opacity = '100%';
    }
    event.target.style.opacity = '75%';
    if (event.target.id == 0) {keyValue = 0;}
    else if (event.target.id == 1) {keyValue = 1;}
    else if (event.target.id == 2) {keyValue = 2;}
    else if (event.target.id == 3) {keyValue = 3;}
    else if (event.target.id == 4) {keyValue = 4;}
    else if (event.target.id == 5) {keyValue = 5;}
    else if (event.target.id == 6) {keyValue = 6;}
    else if (event.target.id == 7) {keyValue = 7;}
    else if (event.target.id == 8) {keyValue = 8;}
    else if (event.target.id == 9) {keyValue = 9;}
    displayNum.push(keyValue);
    console.log(displayNum);
    display.innerHTML = displayNum.join("");
})

let add = (a, b) => {return a+b;}
let subtract = (a, b) => {return a-b;}
let multiply = (a, b) => {return a*b;}
let divide = (a, b) => {return a/b;}

let operate = (operator, a, b) => {
    if (operator == "+") {return add(a,b);}
    else if (operator == "-") {return subtract(a,b);}
    else if (operator == "*") {return multiply(a,b);}
    else if (operator == "/") {return dividide(a,b);}
}

