const questCheck = prompt('Що ви хочете зробити?','add,sub,div,mult?');

const firstNumber = prompt('Введіть перше число');
const secondNumber = prompt('Введіть друге число');

const firstConvertion = Number(firstNumber);
const secondConvertion = Number(secondNumber);

const addResult = firstConvertion + secondConvertion;
const subResult = firstConvertion - secondConvertion;
const divResult = firstConvertion / secondConvertion;
const multResult = firstConvertion * secondConvertion;

alert('Користувач ввів ' + ': ' + firstNumber + '+' + secondNumber + '=' + addResult);
alert('Користувач ввів ' + ': ' + firstNumber + '-' + secondNumber + '=' + subResult);
alert('Користувач ввів ' + ': ' + firstNumber + '/' + secondNumber + '=' + divResult);
alert('Користувач ввів ' + ': ' + firstNumber + '*' + secondNumber + '=' + multResult);
