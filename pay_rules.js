"use strict";

//Declare variables and instantiate

let payRate = 17.3;
let hoursWorked = 45;
let regularHours = 40;
let overTimeHours = hoursWorked - regularHours;
let grossPay;
let regularPay;

if (hoursWorked > regularHours) {
  regularPay = regularHours * payRate;
  let overTime = hoursWorked - regularHours;
  let overTimePay = overTime * payRate * 1.5;
  grossPay = regularPay + overTimePay;
  console.log(
    "Pay Rate: $ " +
      payRate +
      "\nHours Worked(hrs): " +
      hoursWorked.toFixed(2) +
      "\nOver-Time-Hours(hrs): " +
      overTimeHours +
      "\nRegular Pay: $ " +
      regularPay.toFixed(2) +
      "\nOver-Time-Pay: $ " +
      overTimePay +
      "\nGross Pay: $ " +
      grossPay.toFixed(2)
  );
} else {
  grossPay = hoursWorked * payRate;
  console.log(
    "Pay Rate: " +
      payRate.toFixed(2) +
      "\nHours Worked: " +
      hoursWorked +
      "\nGross Pay: " +
      grossPay.toFixed(2)
  );
}
