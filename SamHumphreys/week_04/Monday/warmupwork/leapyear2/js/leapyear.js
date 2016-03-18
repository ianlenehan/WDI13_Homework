// Leap Year Warmup Exercise
// Do this in HTML and JS!
//
// Write a function that will take any given year and return whether it
//  is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
//
// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
// How to structure it...
//
// We want a custom function called isLeapYear
// Bonus!
//
// Ask the user what number they want to test
// Watch a whole heap of information about leap years...
//  http://www.youtube.com/watch?v=xX96xng7sAE

var functions = {
  isLeapYear: function (yearInput) {
    if (yearInput % 400 === 0) {
      return true;
    } else if (yearInput % 100 === 0) {
      return false;
    } else if (yearInput % 4 === 0) {
      return true;
    } else {
      return false;
    }
  },
  checkYear: function () {
    if (functions.isLeapYear(data.input)) {
      var answer = $('<p>').attr('class', 'answer').html(data.input + ' is a leap year!');
      $('.container').append(answer);
    } else {
      var answer = $('<p>').attr('class', 'answer').html(data.input + ' is not a leap year');
      $('.container').append(answer);
    }
  }
};

var data = {
  input: 0
}

$(document).ready(function () {

  $('.button').on('click', function () {
    data.input = $('.input').val();
    functions.checkYear();
  });

  $('.reset').on('click', function () {
    $('.answer').remove();
    $('.input').val('');
  });

});
