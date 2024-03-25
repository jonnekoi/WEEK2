'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log('Fruits:', fruits);

const arrayLenght = fruits.length;

console.log('Length or fruits: ' + arrayLenght);

console.log('Element at index 2: ' + fruits[2]);

console.log('Last Element of Fruits:', fruits[fruits.length - 1]);

const vegetables = [];

for (let i = 0; i < 3; i++) {
  const input = prompt('Enter a vegetable');
  vegetables.push(input);
}

console.log(vegetables);
console.log('Length of vegetables: ' + vegetables.length);
