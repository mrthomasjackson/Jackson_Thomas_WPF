/*
 Thomas Jackson
 WPF 201417 Sec 5
 Expressions_Industry
 */

//alert("Testing 1,2,3");


// converting inches to centimeters
//Equation is 1in = 2.54cm*in

//Created variable to store inches
var inches = prompt ("Enter your height in inches:",70);

//console.log inches
console.log("User height is "+inches+" inches.");

//created a variable to store centimeters
var centimeters;

//section that holds equations
centimeters = (2.54 * inches);


//created alert that shows the answer
alert ("Your converted height is "+ centimeters+" centimeters.");

//console.log-created a section that holds the answer to the equation
console.log("Converted user height is "+centimeters+" centimeters.");

//ask user for weight in pounds
var pounds = prompt ("Enter your weight in pounds:",120);

//console.log pounds
console.log("Weight is "+pounds+" pounds");

//pounds to kilograms equation (k = 0.453592 * p)
var kilos = (pounds * 0.453592);

//alert user converted weight
alert ("Your converted weight is "+kilos+" kilograms.");

//console.log answer
console.log("Converted user weight is "+kilos+" kilograms.");

//asking age
var age = prompt ("Enter you age:",18);

//console.log age
console.log("The user is "+age+" years old");

//created a vaiable to hold the Basal Metobolic rate
var bmr;

//below is the equation to calculate BMR
bmr = 66 + (13.7 * kilos) + (5 * centimeters) - (6.8 * age);



