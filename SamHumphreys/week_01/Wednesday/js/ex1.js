// Define a function maxOfTwoNumbers that takes two numbers as arguments and
// returns the largest of them. Use the if-then-else construct available in
// Javascript. You'll have to remember your pre-work,
// or do some googling to figure this out.

var maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  }
}

var num1 = prompt("What is the first number?");
var num2 = prompt("What is the second number?");
var biggest = maxOfTwoNumbers(num1, num2);

console.log("The biggest of", num1 , "and" , num2 , "is", biggest);
