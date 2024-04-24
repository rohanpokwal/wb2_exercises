//for handling the errors
"use strict";

//variables declared and instanciated as inputs for calculation
let initialInvestment = 1299.99;
let interestRate = 10;

//calculation
let doubleInvestment = initialInvestment * 2;

//calculate the time to double the investment with the given interest rate
//using formula for rule of 72
let timeToDouble = 72 / interestRate;

//Display the Result
console.log(
  "At a " +
    interestRate +
    " % interest rate, your savings account will be worth $" +
    doubleInvestment.toFixed(2) +
    " in " +
    timeToDouble.toFixed(1) +
    " years"
);
