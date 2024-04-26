//Using script for some Error Handling
"use script";

//Declare and instantiate variables for calculation
//variables for points
let x1 = 5;
let y1 = 2;
let x2 = 6;
let y2 = 5;

//calculate using the distance formula
let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

//Display the result
console.log(
  "The distace between (" +
    x1 +
    ", " +
    y1 +
    ") and (" +
    x2 +
    ", " +
    y2 +
    ") is",
  distance.toFixed(2)
);
