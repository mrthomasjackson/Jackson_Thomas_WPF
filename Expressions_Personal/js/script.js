/*
 Thomas Jackson
 WPF 201417 Sec 5
 Expressions_Industry
 */

//alert("Testing 1,2,3");


// converting inches to centimeters
//Equation is 1in = 2.54cm*in

//Created variable to store inches
var inches = prompt ("Enter your height in inches",50);

//console.log inches
console.log(inches);

//created a variable to store centimeters
var centimeters;

//section that holds equations
centimeters = (2.54 * inches);

//console.log-created a section that holds the answer to the equation
console.log(centimeters);

//created alert that shows the answer
alert ("Your converted height is "+ centimeters+" centimeters");

