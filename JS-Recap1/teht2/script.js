'use strict';

const x1 = prompt("Enter X coordinate for 1. point: ");
const y1 = prompt("Enter Y coordinate for 1. point: ");
const x2 = prompt("Enter X coordinate for 2. point: ");
const y2 = prompt("Enter Y coordinate for 2. point: ");

const Distance = Math.sqrt((x2 - x1)^2 + (y2 - y1)^2);
console.log(Distance);

const target = document.getElementById("target");
target.innerHTML = "Distance between these points is: " + Distance;
