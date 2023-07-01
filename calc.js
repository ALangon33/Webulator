// Create varibles for math
let a;
let b;
let operator;

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

// for (n = 0; n < numbers.length; n++) {
//     numbers[n].addEventListener('click', () => {
//         displayOutput.textContent = a + a;
//         display.appendChild(displayOutput);
//     })
// }



numbers.forEach(number => number.addEventListener('click', () => {
    if (!a) {
        a = number.textContent;
    } else {
        a = a + number.textContent;
    };
    displayOutput.textContent = a;
    display.appendChild(displayOutput);
}));