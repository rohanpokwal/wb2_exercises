//Using script for some Error Handling
"use script";

//declare and instanciate variables
let degreeCelsius = 37;

//calculate using conversion formula
let degreeFahrenheit = degreeCelsius * (9 / 5) + 32;

//Display the Result
console.log(
  "The temperature in degree celsius is ",
  degreeFahrenheit.toFixed(1)
);
