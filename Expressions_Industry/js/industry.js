/*
 Thomas Jackson
 WPF 201417 Sec 5
 Expressions_Industry
 */

//alert("Testing 1,2,3");

//Calculating Freelancing Rates for web design

//Create Variable for target salary
var salary = prompt("What is your desired salary?",50000);

//console.log salary
console.log("Your desired salary is $"+salary);

//associated costs at 30% salary
var costs = (salary *.3);

//console.log costs
console.log("Total costs based on 30% of desired salary is "+ costs);

//total cost calculation
var totalCost = (salary+costs);