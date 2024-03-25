'use strict';

const side1 = prompt("Enter lenght of side1: ");
const side2 = prompt("Enter lenght of side2: ");
const side3 = prompt("Enter lenght of side3: ");
const target = document.getElementById("target");

if(side1 == side2 && side2 == side3){
    target.innerHTML = "The triangle is equilateral"
}else if (side1 == side2 || side2 == side3 || side3 == side1){
    target.innerHTML = "The triangle is isosceles"
}else{
    target.innerHTML = "The triangle is scalene"
}
