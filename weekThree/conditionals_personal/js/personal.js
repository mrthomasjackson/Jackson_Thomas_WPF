/*
 Thomas Jackson
 WPF 201417 Sec 5
 Conditionals_Personal
 */

//alert("Testing 1,2,3");

//should I get out of bed

//create variable for time
var currentTime = prompt("What is the current time? Please enter using format HHMM");

if (currentTime === "" ) {
    currentTime = prompt("What time is it?!?",0945);
    }

//console.log current time
console.log("The time is currently " + currentTime);

//create boolean variable to