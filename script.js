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
    if (second === 0) {
        return "Error";
    }
    return first / second;
}
let num1 = NaN, operator = '', num2 = NaN;
let answerDisplayed = false;
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
let numString = '';

function populate(char) {
    if (answerDisplayed) {
        clear();
        answerDisplayed = false;
    }
    display = document.querySelector(".display");
    if (isNaN(char.textContent)) {
        let newOperator = char.textContent;
        if (isNaN(num1)) {
            num1 = parseInt(numString);
            console.log(num1);
            numString = '';
        }
        else {
            num2 = parseInt(numString);
            console.log(num2);
            numString = '';
        }
        if (newOperator === "=") {
            try {
                if (num1 && operator && num2) {
                    display.textContent = operate(num1, operator, num2);
                    answerDisplayed = true;
                }
                else throw(error);
            }
            catch (error) {
                clear();
            }
        }
        else {
            if (!operator) {
                operator = newOperator;
                console.log(operator);
                display.textContent += operator;
            }
            else {
                try {
                    let ans = operate(num1, operator, num2);
                    clear();
                    display.textContent += ans.toString();
                    display.textContent += newOperator;
                    operator = newOperator;
                    num1 = ans;
                }
                catch (error) {
                    clear();
                }
            }
        }
        }
    else {
        numString += char.textContent;
        display.textContent += char.textContent;
    }
    
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
    num1 = NaN;
    num2 = NaN;
    operator = '';
}

document.querySelector("#clear").addEventListener("click", () => clear());