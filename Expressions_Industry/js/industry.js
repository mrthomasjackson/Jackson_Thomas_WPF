/*
 Thomas Jackson
 WPF 201417 Sec 5
 Expressions_Industry
 */

//alert("Testing 1,2,3");

//Calculating Freelancing Rates for web design

//Create Variable for target salary
var salary = prompt("What is your desired salary as a web designer?",99999);

//console.log salary
console.log("Your desired salary is $"+salary);

//associated costs at 30% salary
var costs = (salary *.3);

//console.log costs
console.log("Total costs based on 30% of desired salary is "+ costs);

//total cost calculation
var totalSalary = parseInt(salary)+ parseInt(costs);

//console.log total salary
console.log("Total salary needed is $"+totalSalary);

//alert user on new salary desired.
alert("Based upon your desired salary of $"+salary+". After associated costs of %30, your new salary figure should be $"+totalSalary);

//create variables for holidays, vacation, and sick days
alert ("To gauge the amount of billable hours you have, we have a few more questions:");

//create a variable to hold holidays in the day format
var holiday = prompt("How many holiday days do you plan on taking?",7);

//console.log holiday
console.log("The user plans on taking "+holiday+" days for holiday leave.");

//create a variable for vacation in the day format
var vacation = prompt ("How many vacation days do you plan on having?",14);

//console.log vacation
console.log ("The user plans on taking " + vacation + " vacation days.");

//create a variable for sick days in the day format
var sick = prompt ("How many sick days do anticipate on having?",5);

//console.log sick
console.log("The user plans on having "+sick+ " sick days.");

//creating a variable to calculate holiday hours
var holidayHours = (holiday * 24);

//console.log holidayHours
console.log ("Holidays equals "+holidayHours+" hours.");

//create a variable to calculate vacation hours
var vacationHours = (vacation * 24);

//console.log vacation hours
console.log("Vacation days equals "+vacationHours+ " hours.");

//create a variable to calculate sick hours
var sickHours = (sick * 24);

//console.log sickHours
console.log("Sick days equals "+sickHours+" hours.");

//create a variable to calculate total hours available to work
var totalHours = (2920 - holidayHours - vacationHours - sickHours);

//alert the user how many hours to charge per year
alert ("Based upon 8 hour workdays, you have " + totalHours + " hours of work available a year.");

//console.log totalHours
console.log("User has " + totalHours + " hours of work anticipated per year.");

//create a variable to calculate how much the user should be making per hour
var hourlyWage = (parseInt(totalHours) * parseInt(totalSalary));

//alert the user how much they should charge per hour
alert ("Based upon your estimated salary of " + totalSalary + " you should be charging $" + hourlyWage + " per hour.")

//console.log results of hourlyWage
console.log("The user should charge $" + hourlyWage + " per hour.");

