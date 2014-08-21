/*
 Thomas Jackson
 WPF 201417 Sec 5
 Expressions_Industry
 */

//alert("Testing 1,2,3");

//Create a script to calculate the ratio of the golden rectangle. Often used in the front end design of web sites.

//create a variable to store users name
var name = prompt("Please enter your name:");

//ternary operator to validate name
(name === "") ? prompt("Please enter your name!") : alert ("Thank you for entering your name " + name);

//console.log name
console.log("The user's name is " + name);

//create a variable to store height
var height = prompt("Please enter the height of object in pixels: ");

//console.log height
console.log ("The height of the object is " + height + " pixels");

var width = prompt("Please enter the width of the object in pixels: ");

//console.log width
console.log("The width of the object is " + width + " pixels");

//the variable to store the golden ratio
var goldenRatio = ((1 + math.sqrt(5))/2);

//console.log golden ration
console.log("The golden ratio is " + goldenRatio);




