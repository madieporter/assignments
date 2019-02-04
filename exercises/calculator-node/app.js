var ask = require("readline-sync");

var enterNum = ask.question("Enter any number. ");
var enterNumTwo = ask.question("Enter another number. ");
var mathType = ask.question("Please enter what operation you would like to perform? (add, subtract, divide, multiply ");

if (mathType == "add") {
    console.log(addNums(enterNum, enterNumTwo))
} else if (mathType == "subtract") {
    console.log(subtractNums(enterNum, enterNumTwo))
} else if (mathType == "divide") {
    console.log(divideNums(enterNum, enterNumTwo))
} else if (mathType == "multiply") {
    console.log(multiplyNums(enterNum, enterNumTwo))
} else {
    console.log("Try again.")
}



function addNums(num1, num2) {
    console.log("The result is " + (parseInt(num1) + parseInt(num2)));
}

function subtractNums(num1, num2) {
    console.log("The result is " + (parseInt(num1) - parseInt(num2)));
}

function divideNums(num1, num2) {
    console.log("The result is " + (parseInt(num1) / parseInt(num2)));
}

function multiplyNums(num1, num2) {
    console.log("The result is " + (parseInt(num1) * parseInt(num2)));
}
 



