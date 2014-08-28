/**
 * Created by tjackson on 8/26/14.
 */
/*
 Thomas Jackson
 WPF 201408 Sec 1
 Functions_Wacky
 */

//alert("Testing 1,2,3");

//creating a script to count to 10,000 from a number of their choosing
//variable to ask the starting number
var startingNumber = prompt("Pick a number, any number.");
//while statement to validate startingNumber
while (startingNumber === "") {
    startingNumber = prompt("You did not enter anything, please enter a number");
}
//converting startingNumber to an integer
parseInt(startingNumber);
//if statement in case user input was 10000
if (startingNumber === 10000) {
    alert("Silly goose, you are already at 10,000.");
    console.log("The user doesn't need to count up or down.");
}
//console.log startingNumber
console.log("The user has chosen the staring number of " + startingNumber);
//creating a function to count up
function countUp() {
    startingNumber ++;
    console.log("We are counting up to" + startingNumber);
}
//creating a function to countdown
function countDown (){
    startingNumber --;
    console.log ("We are counting down to " + startingNumber);
}
//while loop to call the count up function
while (startingNumber < 10000) {
    countUp();
}
//while loop to call the count down function
while (startingNumber > 10000) {
    countDown();
}
//if statement to alert user when counting reaches 10000
if (startingNumber === 10000) {
    alert("Congrats! You can count!");
    console.log("Congrats! You can count!");
}