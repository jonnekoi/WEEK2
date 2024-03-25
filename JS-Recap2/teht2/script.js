'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  const num = prompt('Enter a number');
  numbers.push(num);
}

console.log('Numbers: ', numbers);

const num = prompt('Enter a number');
if (numbers.includes(num)) {
  console.log('The number you entered was found in the array');
} else {
  console.log('The number was not found inthe array');
}

numbers.pop();

console.log('Updated numbers: ', numbers);

console.log('Sorted nums: ', numbers.sort(sortNums));

function sortNums(a, b) {
  return a - b;
}
