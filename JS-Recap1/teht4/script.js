'use strict';

const points = prompt("Enter you points: ")
let grade;

if(points >= 0 && points <= 39){
    grade = 0;
}else if(points >= 40 && points <= 51){
    grade = 1;
}else if(points >= 52 && points <= 63){
    grade = 2;
}else if(points >= 64 && points <= 75){
    grade = 3;
}else if(points >= 76 && points <= 87){
    grade = 4;
}else if(points >= 88 && points <= 100){
    grade = 5;
}

const target = document.getElementById("target");
target.innerHTML = "Your grade based on your points: " + points + " is: " + grade;
