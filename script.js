const questCheck = prompt('Що ви хочете зробити?','add,sub,div,mult?',);

const firstNumber = prompt('Введіть перше число');
const secondNumber = prompt('Введіть друге число');

const firstConversion = Number(firstNumber);
const secondConversion = Number(secondNumber);

const addResult = firstConversion + secondConversion;
const subResult = firstConversion - secondConversion;
const divResult = firstConversion / secondConversion;
const multResult = firstConversion * secondConversion;

alert('Користувач ввів ' + ': ' + firstNumber + '+' + secondNumber + '=' + addResult);
alert('Користувач ввів ' + ': ' + firstNumber + '-' + secondNumber + '=' + subResult);
alert('Користувач ввів ' + ': ' + firstNumber + '/' + secondNumber + '=' + divResult);
alert('Користувач ввів ' + ': ' + firstNumber + '*' + secondNumber + '=' + multResult);
