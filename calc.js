// Create varibles for math
let a = null;
let b = null;
let operator = undefined;

// Create math functions
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const percent = (a) => a / 100;
const invert = (a) => a * -1;

// Get numbers to output on display when clicked
const display = document.getElementById("display");
const displayOutput = document.createElement("p");
const numbers = Array.from(document.getElementsByClassName("number"));

numbers.forEach(number => number.addEventListener('click', appendToOutput = () => {
    if (a === null) {
        a = number.textContent;
        displayOutput.textContent = a;
        display.appendChild(displayOutput);
    } else if (a && !operator) {
        a = a + number.textContent;
        displayOutput.textContent = a;
        display.appendChild(displayOutput);
    } else if (operator && b === null) {
        b = number.textContent;
        displayOutput.textContent = b;
        display.appendChild(displayOutput);
    } else {
        b = b + number.textContent;
        displayOutput.textContent = b;
        display.appendChild(displayOutput);
    };
}));

// Clear numbers from display as well as operator if defined
const clear = document.getElementById("clear");
clear.addEventListener('click', () => {
    if (a) { a = null };
    if (b) { b = null };
    if (operator) { operator = undefined };
    if (display.contains(displayOutput)) { display.removeChild(displayOutput) };
});

// Provide inversion method
const inverter = document.getElementById("inverter");
inverter.addEventListener('click', () => {
    newOutput = invert(Number(a));
    a = newOutput;
    displayOutput.textContent = a;
    display.appendChild(displayOutput);
});

// Make percent work
const percentButton = document.getElementById("percent")
percentButton.addEventListener('click', () => {
    newOutput = percent(Number(a));
    a = newOutput;
    displayOutput.textContent = a;
    display.appendChild(displayOutput);
});

// Make only one decimal allowable at any given time
const decimal = document.getElementById("decimal");
decimal.addEventListener('click', () => {
    if (a === null) {
        a = "0.";
        displayOutput.textContent = a;
        display.appendChild(displayOutput);
    } else if (!operator && a.includes('.')) {
        decimal.removeEventListener('click', appendToOutput)
    } else if (!operator && !a.includes('.')) {
        a = a + decimal.textContent;
        displayOutput.textContent = a;
        display.appendChild(displayOutput);
    } else if (operator && b === null) {
        b = "0.";
        displayOutput.textContent = b;
        display.appendChild(displayOutput);
    } else if (operator && b.includes('.')) {
        decimal.removeEventListener('click', appendToOutput)
    } else {
        b = b + decimal.textContent;
        displayOutput.textContent = b;
        display.appendChild(displayOutput);
    };
});

// Give operations event listeners
// Start with add & equals for testing
const addButton = document.getElementById("add");
addButton.addEventListener('click', () => {
    operator = add;
});

const subtractButton = document.getElementById("subtract");
subtractButton.addEventListener('click', () => {
    operator = subtract;
});

const multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener('click', () => {
    operator = multiply;
});

const divideButton = document.getElementById("divide");
divideButton.addEventListener('click', () => {
    operator = divide;
});

const equalsButton = document.getElementById("equals");
console.log(equalsButton);
equalsButton.addEventListener('click', () => {
    if (operator === divide && b === "0") {
        displayOutput.textContent = "58008";
        display.appendChild(displayOutput);
        return;
    }
    mathOutput = operator(Number(a), Number(b));
    if (confirmFloat(mathOutput)) {
        displayOutput.textContent = parseFloat(mathOutput).toFixed(2).toString();        
    } else {
        displayOutput.textContent = mathOutput.toString();        
    }
    display.appendChild(displayOutput);
    b = null;
    operator = undefined;
});

const confirmFloat = (num) => {
    num = num.toString()
   if (num.includes('.')){
       return true;
   } else {
       return false;
   }
}