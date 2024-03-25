'use strict';

// Prompt the user to enter a positive integer
const num = parseInt(prompt('Enter a positive integer:'));
const table = document.createElement('table');
for (let i = 1; i <= num; i++) {
  const tr = document.createElement('tr');
  for (let j = 1; j <= num; j++) {
    const td = document.createElement('td');
    td.textContent = i * j;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
document.body.appendChild(table);
