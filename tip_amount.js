//Using "using strict" for best practices and some error handling
"use strict";

//declare variable and instanciating it for foodbill
let foodBill = 99.99;
let tipPercentage = 0.1;

//calculate the tip amount with 15%, 25%, 35%
//tip amount when 15%
let tipAmount = foodBill * tipPercentage;

//display the results
console.log("The tip on a $ " + foodBill + " food bill is " + tipAmount);
