//Using script for some Error Handling
"use script";

let numOfPeople = 38;
let vanPassengerSeatEach = 15;
let costPerVan = 250;

//this calculation will give number of vans that will be required for given number of peope
let numOfVansReq = numOfPeople / vanPassengerSeatEach;

//calculate the cost of van given each van cost $250
//This will give us the total cost of the van with respect to number of people we have
let vansCost = numOfVansReq * costPerVan;

//this calcultes when we split the total fare
let splitEach = vansCost / numOfPeople;

//display the result
console.log(
  "with " +
    numOfPeople +
    " peoples, It will cost $ " +
    vansCost.toFixed(2) +
    " and Each person will pay $ " +
    splitEach.toFixed(2) +
    " if we split the bill."
);
