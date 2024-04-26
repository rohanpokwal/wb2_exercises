//use this for best practices and some error handling
"use strict";

//create a variable for the current hours and greeting
let currentHours = 20;
let greeting = "";

//create an if/else statement to figure out our greeting
//before 10am: good morning; after 10am but before 5: good afternoon, after 5: good evening
if (currentHours <= 10) {
  greeting = "Good Morning!";
} else if (currentHours < 17) {
  greeting = "Good day!";
} else {
  greeting = "Good evening!";
}

console.log(greeting);
