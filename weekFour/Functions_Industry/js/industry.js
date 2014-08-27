/**
 * Created by tjackson on 8/26/14.
 */
/*
 Thomas Jackson
 WPF 201408 Sec 1
 Functions_Industry
 */

//alert("Testing 1,2,3");

//script is to keep track of how much a client owes in dollars and come up with a monthly plan and show how much per week is owed
//variable to store the amount of money remaining
var moneyOwed = prompt("How much does your client still owe?");
//if statement to confirm prompt was entered
if (moneyOwed === "") {
    moneyOwed = prompt("You did not enter anything. How much does your client still owe?");
}
//console.log moneyOwed
console.log("The client owes " + moneyOwed + " dollars");
//How much time the client has to pay?
var monthsOwed = prompt("How many months does your client have to pay you");
//if statement to validate
if (monthsOwed === "") {
    monthsOwed = prompt("You did not enter anything. How many months?");
}
//console.log monthsOwed
console.log("The client has " + monthsOwed + " months to pay you back.");
//variable to find out if client is paying on a weekly or biweekly basis
var weekly = prompt("Is your client paying every 1 or 2 weeks?");
//convert string to int
weekly = parseInt(weekly);
//create a variable to store the value to be used in the function for calculation
var weeklyTwo;
//if else statement needed to make weekly useable in calculation
if (weekly === "") {
    weekly = prompt("You did not enter anything. Please try again.");
}else if (weekly == 1) {
    weeklyTwo = 4;
}else if (weekly == 2) {
    weeklyTwo = 2;
}else if (weekly > 2) {
    weekly = prompt("Sorry, we only support a pay schedule of 1 and 2 weeks.");
}else if (weekly < 1) {
    weekly = prompt("Sorry, we only support a pay schedule of 1 and 2 weeks.");
}
//converting moneyOwed to int
moneyOwed = parseInt(moneyOwed);
//console.log moneyOwed
console.log("The client owes " + moneyOwed + " dollars.");
//converting monthsOwed to int
monthsOwed = parseInt(monthsOwed);
//console.log monthsOwed
console.log("The client has " + monthsOwed + " months to pay.");
//convert weeklyTwo to int
weeklyTwo = parseInt(weeklyTwo);

//function to store calculation
function moneyPerWeek (money,months,week){

    var moneyMonths = money / months;
    var moneyWeeks = moneyMonths/(week);
    return moneyWeeks;

}
//calling function moneyPerWeek
var moneyWeeks = moneyPerWeek(moneyOwed,monthsOwed,weeklyTwo);

//alert the user of the final answer
alert ("The client owes " + moneyWeeks + " per " + weekly + " weeks");
//console.log final answer
console.log("The client owes " + moneyWeeks + " per " + weekly + " weeks");