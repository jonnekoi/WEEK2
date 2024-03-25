'use strict';

function sort(a, b) {
  return a - b;
}

function sortArray(numbers) {
  const sortedNumbers = [...numbers].sort(sort);
  return sortedNumbers;
}

const numbers = [10, 5, 7, 3, 9, 7, 10, 22, 11, 18];
console.log('Numbers:', numbers);

const sortedNumbers = sortArray(numbers);
console.log('Sorted numbers:', sortedNumbers);
