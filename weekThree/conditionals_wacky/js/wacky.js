/*
 Thomas Jackson
 WPF 201408 Sec 1
 Expressions_Wacky
 */

//alert("Testing 1,2,3");

//I am writing a script to decide if I should jog inside or outside

//gather information about the user
var name = prompt("Hello, what is your name?");
//validate name prompt is not left blank
if (name === "") {
    name = prompt("Sorry, I didn't catch your name.");
    alert("Hello " + name);
}else{
    alert ("Hello " + name);
}
//console.log name
console.log("The users name is " + name);
//asking the user about preferred weather conditions
var tempLow = prompt("What is the lowest temperature you are willing to be in?");
//validate tempLow prompt
if (tempLow === "") {
    tempLow = prompt("You did not enter anything.")
}
//console.log tempLow
console.log("The low recorded temperature is " + tempLow);
//prompt user highest comfortable running temp
var tempHigh = prompt("What is the highest temperature you are willing to be in?");
//validating prompt
if (tempHigh === "") {
    tempHigh = prompt("You did not enter anything.");
}
//console.log tempHigh
console.log("The high recorded temperature is " + tempHigh);
//create prompt to ask for current temperature
var currentT = prompt("What is the current temperature?");
//validate currentT prompt
if (currentT === ""){
    currentT = prompt("You did not enter anything");
}
//console.log currentT
console.log("The current temperature is " + currentT);

//create a variable to store temp as a boolean variable
var temp;
//if tempLow is greater than currentT store temp as true
if (parseInt(tempLow) > parseInt(currentT)){
    alert("It is too cold. But I have some more questions.");
    console.log("The temperature is too low to run outside.");
    temp = true;
//if tempHigh is less than current temp temp is true
}else if (parseInt(tempHigh) < parseInt(currentT)) {
    alert ("It is too hot. But I have some more questions. ");
    console.log("The temperature is too high to run outside.");
    temp = true
//if current temp is in between tempHigh and tempLow then temp is false
}else {
    alert("It is perfect running weather! Only one more question!");
    console.log("The temperature is perfect for running outside.");
    temp = false
}
//console.log temp
console.log("If temp is true then running INSIDE is recommended. If temp is false, running OUTSIDE is recommended. Value of temp is  " + temp);
//prompt asking about bad weather
var badWeather = prompt ("Are you experiencing bad weather? yes or no:");
// if there is bad weather the value is true
if (badWeather === "yes"){
    badWeather = true
//if there is not bad weather the value is false
}else if (badWeather === "no"){
    badWeather = false
}
//console.log bad weather
console.log("Is the user having bad weather?" + badWeather);

//if bad weather is true and temp is true then the user should  run inside
if (badWeather === true && temp === true){
    alert ("You are crazy if you run outside!");
    console.log("DEFINITELY should not run outside");
//if bad weather is false and temp is false the user should run outside
}else if (badWeather === false && temp === false){
    alert ("You should definitely run outside!");
    console.log("You should definitely run outside");
//if bad weather is true and temp is false, running outside is not recommended
}else if (badWeather === true || temp == false) {
    alert ("You may enjoy running outside, but I do not recommend doing so.");
    console.log("Running outside is not recommended.");
//if bad weather is false and temp is true running is not recommended
}else if (badWeather === false || temp == true) {
    alert("You may enjoy running outside, but I do not recommend doing so.");
    console.log("Running outside is not recommended.");
}





