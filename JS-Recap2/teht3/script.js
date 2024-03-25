'use strict';

const numbers = [];
let input;

while (true) {
  input = prompt('Enter a number or "done" to finish');
  if (input === 'done') {
    break;
  }
  numbers.push(input);
}

const evenNumbers = [];

for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}
const target = document.getElementById('target');

if (evenNumbers.length === 0) {
  target.innerHTML = 'Even numbers, none';
} else {
  target.innerHTML = `Even numbers :  ${evenNumbers}`;
}
