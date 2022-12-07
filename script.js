const firstNumber = Number(prompt('Введіть перше число'));
const secondNumber = Number(prompt('Введіть друге число'));

const questAdd = confirm('+');
const questSub = confirm('-');
const questMult = confirm('*');
const questDiv = confirm('/');

const addResult = firstNumber + secondNumber;
const subResult = firstNumber - secondNumber;
const multResult = firstNumber * secondNumber;
const divResult = firstNumber / secondNumber;

if (questAdd == ! false) {
    alert('Користувач ввів ' + ': ' + firstNumber + '+' + secondNumber + '=' + addResult);
} else if (questSub == ! false) {
    alert('Користувач ввів ' + ': ' + firstNumber + '-' + secondNumber + '=' + subResult);
} else if (questMult == ! false) {
    alert('Користувач ввів ' + ': ' + firstNumber + '*' + secondNumber + '=' + multResult);
} else if (questDiv == ! false) {
    alert('Користувач ввів ' + ': ' + firstNumber + '/' + secondNumber + '=' + divResult);
} else {
    alert('Тоді рахуйте самі:)');
}