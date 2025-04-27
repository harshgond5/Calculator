let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate(); 
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').value = `${previousInput} ${currentOperation}`;
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        case '^':
            result = Math.pow(prev, current);
            break;    
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
}

function clearValue() {
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
}

function Percentage() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) / 100).toString();
        document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;
    } else if (previousInput !== '') {
        previousInput = (parseFloat(previousInput) / 100).toString();
        document.getElementById('display').value = `${previousInput} ${currentOperation}`;
    }
}