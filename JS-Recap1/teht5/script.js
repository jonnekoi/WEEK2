'use strict';

let num = prompt('Enter a positive number: ');
while (num < 0) {
  num = prompt('Enter a positive number: ');
}

let sum = 0;
for (let i = 0; i <= num; i++) {
  sum += i;
}

const target = document.getElementById('target');
target.innerHTML = 'Natural numbers summed up to your number: ' + sum;
