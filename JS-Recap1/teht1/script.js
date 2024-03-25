'use strict';
const celsius = prompt("Enter temperature in celius: ");
const target = document.getElementById("target");
const fahrenheits = (celsius * 9/5) + 32;
target.innerHTML = "Temperature in fahrenheits: " + fahrenheits;
