//Using script for some Error Handling
"use script";

//Declare and instansiate the variables
let length = 12; //in feet
let width = 12; //in feet
let extra = 10 / 100;

//calculate the box in square foot
let oneBox = 12; //square foot

//calculate the size of a room in square foot
let roomSize = length * width; //square foot

//calculate number of box they need to cover the room size
let numOfBox = roomSize / oneBox;

//calculate with 10% Extra
let numOfBoxWithTenPercent = numOfBox * extra + numOfBox;

//display the result
console.log(
  "The number of boxes required for your room size with 10% Extra is " +
    numOfBoxWithTenPercent
);
