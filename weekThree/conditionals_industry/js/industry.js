/*
 Thomas Jackson
 WPF 201408 Sec 1
 Conditionals_Industry
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
var height = prompt("Please enter the height of object in pixels: ", 500);

//console.log height
console.log ("The height of the object is " + height + " pixels");

var width = prompt("Please enter the width of the object in pixels: ", 809);

//console.log width
console.log("The width of the object is " + width + " pixels");

//the variable to store the golden ratio
var goldenRatio = Math.round(100*(1 + Math.sqrt(5))/2)/100;


//calculation to find the ratio between height and width
var ratioH = Math.round(100*height/width)/100;
var ratioW = Math.round(100*width/height)/100;


//console.log golden ration
console.log("The golden ratio is " + goldenRatio);

//console.log ratio
console.log("The ratio give by the user equals " + ratioH + " and " + ratioW);

//if else statement to decide if ratios equal the golden ratio
if (ratioW == goldenRatio){
    alert ("Your ratio matches the ratio of the golden rectangle!");
    console.log("The users ratio matches the ratio of the golden rectangle!");
}else if (ratioH == goldenRatio) {
    alert("Your ratio matches the ratio of the golden rectangle!");
    console.log("The users ratio matches the ratio of the golden rectangle!");
} else {
    alert ("Your ratio does not match that of the golden ratio. Try again!");
    console.log ("The ratios do not math those of the golden triangle")
}





