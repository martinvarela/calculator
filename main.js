let currentOperand1 = '';
let currentOperand2 = '';
let currentOperator = '';

const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.getElementById('equal-button');
const clearButton = document.getElementById('clear-button');
const commaButton = document.getElementById('comma-button');
const resultScreen = document.getElementById('result-screen');


digitButtons.forEach((digitButton) =>
    digitButton.addEventListener('click', () => addDigit(digitButton.textContent))
)

operatorButtons.forEach((operatorButton) =>
    operatorButton.addEventListener('click', () => addOperator(operatorButton.textContent))
)

equalButton.addEventListener('click', () => addEqual(equalButton.textContent))

commaButton.addEventListener('click', () => addComma(commaButton.textContent))

clearButton.addEventListener('click', () => clear())


function addDigit(number) {
    resultScreen.textContent += number;
    if (currentOperator == '') {
        currentOperand1 += number;
    } else {
        currentOperand2 += number;
    }
}

function addOperator(operator) {
    if (currentOperand1 && currentOperand2 && currentOperator) {
        getResult();
    // delete operator to be replaced
    } else if (currentOperator){
        resultScreen.textContent = resultScreen.textContent.substring(0, resultScreen.textContent.length - 1);
    }
    currentOperator = operator;
    resultScreen.textContent += operator;
}

function addComma(comma) {
    if (currentOperator == '') {
        if (!currentOperand1.includes('.')) {
            currentOperand1 += comma;
            resultScreen.textContent += comma;
        }
    } else {
        if (!currentOperand2.includes('.')) {
            currentOperand2 += comma;
            resultScreen.textContent += comma;
        }

    }
}

function addEqual(equal) {
    if (currentOperand1 && currentOperand2 && currentOperator) {
        resultScreen.textContent += equal;
        getResult();
    }
}

function clear() {
    currentOperand1 = '';
    currentOperand2 = '';
    currentOperator = '';
    resultScreen.textContent = '';
}


function getResult() {
    result = operate(currentOperator, currentOperand1, currentOperand2);
    result = Math.round(result * 1000) / 1000;
    currentOperand1 = result;
    currentOperand2 = '';
    currentOperator = '';
    resultScreen.textContent = result;
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    x = Number(x);
    y = Number(y);
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
    }
    return 0;
}
