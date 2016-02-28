// We have lots of logical operators in this!
// Remember that the && operator needs both sides to evaluate to true
// The || operator needs at least one side to evaluate to true
// The ! operator is called the negation operator. It returns the opposite

// Solution using 1 if statement:
var isLeapYear = function ( year ) {
  // For this to evaluate to true...
  //    It needs there to be no remainder when divided by 4
  //    If it is divisible by 100, it is also needs to be divisble by 400

  if ( year % 4 === 0 && ( !(year % 100 === 0 ) || (year % 400 === 0 ) ) ) {
    console.log( year + " is a leap year." );
    return year + " is a leap year.";
  } else {
    console.log( year + " is not a leap year." );
    return year + " is not a leap year.";
  }
};

isLeapYear( 1997 ); // 1997 Should return false.
isLeapYear( 1996 ); // Should return true.
isLeapYear( 1900 ); // Should return false.
isLeapYear( 2000 ); // Should return true.

var yearToTest = prompt( "What number would you like to test?" );
isLeapYear( parseInt( yearToTest ) );

// // Solution using nested if statements:
// var isLeapYear = function ( year ) {
//   var message = "";
//   if ( year % 4 === 0 ) {
//     if ( year % 100 === 0 ) {
//       if ( year % 400 === 0 ) {
//         message = year + " a Leap Year.";
//       } else {
//         message = year + " is not a Leap Year.";
//       }
//     } else {
//       message = year + " is a Leap Year.";
//     }
//   } else {
//     message = year + " is not a Leap Year.";
//   }
//   return message;
// };

// var yearInput = prompt( "Enter a year of your choice: " );
// console.log(isLeapYear(parseInt(yearInput)));
