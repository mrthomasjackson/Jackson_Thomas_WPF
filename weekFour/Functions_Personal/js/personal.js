/**
 * Created by tjackson on 8/26/14.
 */
/*
 Thomas Jackson
 WPF 201408 Sec 1
 Functions_Personal
 */

//alert("Testing 1,2,3");

//create script to countdown days until your birthday
//ask user how many days until their birthday
var daysLeft = prompt("How many days left until your birthday?");

//validate days left
(daysLeft === "") ? prompt("You left the prompt blank. Please enter the amount of days left."):alert ("You have " + daysLeft +" days left until your birthday.");

//console.log daysLeft
console.log("You have " + daysLeft +" days left until your birthday.");



//create a function to take away days
function countdown (days) {
    days-- ;
    daysLeft = days;
    console.log("You have " + daysLeft + " days left until your birthday.")
}

//if statement to call function
while (daysLeft > 0) {
    countdown(daysLeft);
}
