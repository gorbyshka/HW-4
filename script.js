const firstNumber = Number(prompt('Введіть перше число'));
const secondNumber = Number(prompt('Введіть друге число'));
const operation = prompt('Введіть операцію');
let result;

switch (operation) {
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '/':
        result = firstNumber / secondNumber;
        break;
    default:
        alert('Ви не ввели операцію');
};

alert('Користувач ввів ' + ': ' + firstNumber + operation + secondNumber + '=' + result);
