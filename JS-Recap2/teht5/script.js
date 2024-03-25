'use strict';

function sortArray(numbers, order) {
  const sortedNumbers = [...numbers].sort(function (a, b) {
    if (order === 'asc') {
      return a - b;
    } else if (order === 'desc') {
      return b - a;
    }
  });
  return sortedNumbers;
}

const nums = [10, 8, 7, 6, 5, 4, 3];

console.log(sortArray(nums, 'asc'));
console.log(sortArray(nums, 'desc'));
