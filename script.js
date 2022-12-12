const firstNumber = Number(prompt('Введіть перше число?'));
const secondNumber = Number(prompt('Введіть друге число?'));
const operation = prompt('Введіть операцію');

const addResult = firstNumber + secondNumber;
const subResult = firstNumber - secondNumber;
const multResult = firstNumber * secondNumber;
const divResult = firstNumber / secondNumber;

switch (operation) {
    case '+':
        alert('Користувач ввів ' + ': ' + firstNumber + '+' + secondNumber + '=' + addResult);
        break;
    case '-':
        alert('Користувач ввів ' + ': ' + firstNumber + '-' + secondNumber + '=' + subResult);
        break;
    case '*':
        alert('Користувач ввів ' + ': ' + firstNumber + '*' + secondNumber + '=' + multResult);
        break;
    case '/':
        alert('Користувач ввів ' + ': ' + firstNumber + '/' + secondNumber + '=' + divResult);
        default:
            alert('Ви не ввели операцію');
};
