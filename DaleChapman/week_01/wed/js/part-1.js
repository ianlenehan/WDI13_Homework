


/*Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24. */
/*
var maxOfThreeNumbers = function(num1,num2,num3) {
  if (num1 === num2 === num3) {
    console.log('These numbers are the same mate.');
  }
  else if (num1 > num2,num3) {
    console.log(' The greater number of ' + num1 + ',' + num3 + ' and ' + num2 + ' is ' + num1);
  }
  else if ( num2 > num1,num3) {
    console.log(' The greater number of ' + num1 + ',' + num3 + ' and ' + num2 + ' is ' + num2);
  }
  else if ( num3 > num1,num2) {
    console.log(' The greater number of ' + num1 + ',' + num3 + ' and ' + num2 + ' is ' + num3);
  }
  else {
    console.log('You potato, how did you mess this up?!');
  }
}

maxOfThreeNumbers(1,1,1)

var pickVowels = function(letter) {
  var vowels = ['a','e','i','o','u']
    for (i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]){
          return true;
        }
      }
      return false;
  }
pickVowels('b');

console.log("help!");


*/
//add array
/*
var sumArray = function(array) {
  var total = 0;
  for  (i = 0; i < array.length; i++) {
      total += array[i];
    }
  return total;
}
sumArray([1,2,3,4])
*/
console.log("ok mate");

//multiplication array

var multiplyArray = function(array) {
  var total = 1;
  for  (i = 0; i < array.length; i++) {
      total *= array[i];
    }
  return total;
}
multiplyArray([1,2,3,4])
