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

//create variable to store if I am working or not
var work = prompt("Are you working today?");

if (work === "") {
    work = prompt("Are you working today?!?");
}
//declaring work as true or false
if (work === "yes") {
    work = true;
} else {
    work = false
}

//console.log work
console.log ("Are you working? " + work);