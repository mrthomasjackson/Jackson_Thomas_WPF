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

//adding if statement to validate prompt
if (work === "") {
    work = prompt("Are you working today?!?");
}
//declaring work as true or false
if (work === "yes") {
    work = true;
// adding else statement in case user is not working
} else {
    work = false
}

//console.log work
console.log ("Are you working? " + work);

//tell the user to go back to bed if they are not working
if (work === false) {
    alert("You do not have work, go back to bed.");
//console.log the false statement of work
    console.log("User does not have work. Going back to bed.");
}

//creating second half of project
//if user is working today
if (work === true) {
//ask the user what time work is
    var workTime = prompt("What time is work? Please enter using format HHMM: ");
//checking the current time versus work time (using parseInt())
    if (parseInt(workTime) <= parseInt(currentTime)) {
//alert and console.log if it is time to get out of bed
        alert ("Time to get out of bed!");
        console.log("It is time for the user to get out of bed.");
//adding else statement if user can stay in bed
    } else {
        alert ("You can stay in bed until " + workTime);
        console.log("User has until " + workTime + " to sleep." );
    }
}