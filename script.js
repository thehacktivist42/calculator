function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}
let num1 = NaN, operator = '', num2 = NaN;

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);break;
        default:
            return 'Invalid operator'
    }
}

function populate(char) {
    display = document.querySelector(".display");
    display.textContent += char.textContent;
}

numList = document.querySelectorAll('.number');
operatorList = document.querySelectorAll('.operator');

numList.forEach(num => {
    num.addEventListener('click', () => populate(num));
});

operatorList.forEach(operator => {
    operator.addEventListener('click', () => populate(operator));
});

function clear() {
    document.querySelector(".display").textContent = "";
}

document.querySelector("#clear").addEventListener("click", () => clear());