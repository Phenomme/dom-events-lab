/*-------------------------------- Constants --------------------------------*/

const calculator = document.querySelector('#calculator');
const buttons = document.querySelectorAll(".button")
const display = document.querySelector(".display")
const operatorElement = document.querySelector(".operator")
const eqauls = document.querySelector(".equals")
/*-------------------------------- Variables --------------------------------*/
let storedNum1
let storedNum2
let total
let operator
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // This log is for testing purposes to verify we're getting the correct value
        console.log(event.target.innerText);
        // Future logic to capture the button's value would go here...
    });
});

calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    // console.log(event.target.innerText);

    // Example
    if (event.target.classList.contains('number')) {
        // Do something with a number
        display.innerText = event.target.innerText
        if (operator = "") {
            storedNum1 += event.target.innerText
        } else {
            storedNum2 += event.target.innerText
        }

    }

    if (event.target.classList.contains('operator')) {
        display.innerText = event.target.innerText
        if (storedNum1) {
            operatorElement = clickedElement.innerText;
            display.innerText = operator;
        }
    }

    // Example
    if (event.target.innerText === '*') {
        // Do something with this operator
        total = storedNum1 * storedNum2

    } else if (event.target.innerText === '+') {
        total = storedNum1 + storedNum2

    } else if (event.target.innerText === '-') {
        total = storedNum1 - storedNum2


    } else if (event.target.innerText === '/') {
        total = storedNum1 / storedNum2


    } else if (event.target.innerText === 'C') {
        // display.innerText = " "
        // storedNum1 = " "
        // storedNum2 = " "
        // total = " "
        // display.innerText = "0"
        clear()
    }

    if (event.target.classList.contains("equals")) {
        if (storedNum1 && storedNum2 && operator) {
            total =calculate(storedNum1, storedNum2, operator)
            display.innerText = total
        }
        
        
        
        return total
    }

});

/*-------------------------------- Functions --------------------------------*/
// console.dir(display)
// console.log(operators)
function clear() {
    display.innerText = " "
    storedNum1 = " "
    storedNum2 = " "
    total = " "
    display.innerText = "0"
}
function calculate() {
    if (event.target.innerText === '*') {
        // Do something with this operator
        total = storedNum1 * storedNum2

    } else if (event.target.innerText === '+') {
        total = storedNum1 + storedNum2

    } else if (event.target.innerText === '-') {
        total = storedNum1 - storedNum2


    } else if (event.target.innerText === '/') {
        total = storedNum1 / storedNum2

    }
}