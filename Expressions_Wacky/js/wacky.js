/*
 Thomas Jackson
 WPF 201417 Sec 5
 Expressions_Wacky
 */

//alert("Testing 1,2,3");

//alert the user what the purpose of this application is
alert("The purpose of this application is to calculate the pythagorean theorem.")

//creating an equation to calculate the pythagorean theorem
var aVariable = prompt("Please enter the value of 'a': ", 1 );

//console.log 'a'
console.log("The value of a is " + aVariable );

//create a variable to store the value of 'b'
var bVariable = prompt("Please enter the value of 'b': ", 2);

//console.log 'b'
console.log("The value of 'b' is " + bVariable);

//create a varable to store 'c' before dividing the root
var cVariable = (parseInt(aVariable * aVariable) + (parseInt(bVariable * bVariable)));

//console.log cVariable
console.log(cVariable);

//find the square root of cVariable
var csVariable = Math.sqrt(parseInt(cVariable));

//console.log csvariable
console.log("The square root of " + cVariable + " is " + csVariable);

//alert the user of the answer
alert("C = " + csVariable);

//for fun lets divide that answer by any number
var funVariable = prompt("For fun lets divide the answer by a number of your choice: ", 3);

//console.log funVariable
console.log("We will divide by " + funVariable);

//equation
var final = (parseInt(csVariable)/ parseInt(funVariable));

//console.log final
console.log("The final answer is " + final);

//alert the user
alert ("The answer to your equation is " + final);






