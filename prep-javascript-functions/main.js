function addTwoNumbers(num1, num2) {
  const result = num1 + num2;
  return result;
}
const addNumbers = addTwoNumbers(5, 7);
console.log('addTwoNumbers:', addNumbers);

function convertHoursToMinutes(hours) {
  const result = hours * 60;
  return result;
}
const hoursMinutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes:', hoursMinutes);

function getGreeting(name) {
  const result = 'Hello ' + name + '!';
  return result;
}
const greeting = getGreeting('Abigail');
console.log('getGreeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  const result = (num1 + num2) * 5;
  return result;
}
const addMultiply = addAndMultiplyBy5(6, 3);
console.log('addAndMultiplyBy5:', addMultiply);

function multiplyAndDivideBy5(num1, num2) {
  const result = (num1 * num2) / 5;
  return result;
}
const multiplyDivide = multiplyAndDivideBy5(7, 5);
console.log('multiplyAndDivideBy5:', multiplyDivide);

function subtractTwoNumbers(num1, num2) {
  const result = num1 - num2;
  return result;
}
const subtractNumbers = subtractTwoNumbers(35, 14);
console.log('subtractTwoNumbers:', subtractNumbers);

function getCircleCircumference(radius) {
  const result = 2 * Math.PI * radius;
  return result;
}
const circle = getCircleCircumference(7);
console.log('getCircleCircumference:', circle);

function getFullName(firstName, lastName) {
  const result = firstName + ' ' + lastName;
  return result;
}
const fullName = getFullName('Abigail', 'Nunez');
console.log('getFullName:', fullName);

function cube(number) {
  const result = number * number * number;
  return result;
}
const cubeResult = cube(8);
console.log('cube:', cubeResult);
