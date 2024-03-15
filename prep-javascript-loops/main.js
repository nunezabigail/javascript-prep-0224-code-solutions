// create your loops here.

function whileLoop1() {
  let index = 0;
  const while1Array = [];
  while (index < 10) {
    while1Array.push(index);
    index++;
  }
  return while1Array;
}
let whileLoop1Result = whileLoop1();
console.log('whileLoop1 output', whileLoop1Result);

function whileLoop2() {
  let index = 0;
  const while2Array = [];
  while (index < 20) {
    while2Array.push(index);
    index += 2;
  }
  return while2Array;
}
let whileLoop2Result = whileLoop2();
console.log('whileLoop2 output', whileLoop2Result);

function forLoop1() {
  const forLoop1Array = [];
  for (let index = 0; index < 10; index++) {
    forLoop1Array.push(index);
  }
  return forLoop1Array;
}
const forLoop1Result = forLoop1();
console.log('forLoop1 output', forLoop1Result);

function forLoop2() {
  for (let index = 100; index > 0; index--) {
    console.log('Time till explosion: ' + index + '!  ');
  }
}
forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
function forInLoop1(object) {
  const forInArray1 = [];
  for (const key in person) {
    forInArray1.push(key);
  }
  return forInArray1;
}
const forInLoop1Result = forInLoop1(person);
console.log('for in loop 1 output', forInLoop1Result);

function forInLoop2(object) {
  const forInArray2 = [];
  for (const key in person) {
    forInArray2.push(person[key]);
  }
  return forInArray2;
}
const forInLoop2Result = forInLoop2(person);
console.log('for in loop 2 output', forInLoop2(person));
