// The sum of the squares of the first ten natural numbers is,
//
// 1**2 + 2**2 + ... + 10**2 = 385
//
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)**2 = 55**2 = 3025
//
// Hence the difference between the sum of the squares of the first
// ten natural numbers and the square of the sum is 3025 - 385 = 2640.
//
// Make it so that it doesn't just work for the number 10.

var variables = {
  sumOfSqs: 0,
  sqOfSums: 0,
  difference: 0,
  countTo: 0
};

var doStuff = {
  runIt: function () {
    doStuff.clearIt();
    doStuff.doMaths();
    doStuff.addIt();
  },

  doMaths: function () {
    for (var i = 1; i <= variables.countTo; i++) {
      variables.sumOfSqs += (i * i);
      variables.sqOfSums += i;
    }
    variables.sqOfSums = (variables.sqOfSums * variables.sqOfSums);
    variables.difference = variables.sqOfSums - variables.sumOfSqs;
  },

  clearIt: function () {
    variables.sumOfSqs = 0; variables.sqOfSums = 0;
    $('.answer').remove();
    $('.input').fadeToggle();
    variables.countTo = parseInt($('.input').val());
  },

  addIt: function () {
    $('.input').fadeToggle();
    var answer = $('<div>').addClass('answer');
    var sumOfSqs = $('<p>').html('The sum of the squares from 1 to ' + variables.countTo + ' is ' + variables.sumOfSqs + '.');
    var sqOfSums = $('<p>').html('The square of the sums from 1 to ' + variables.countTo + ' is ' + variables.sqOfSums + '.');
    var difference = $('<p>').html('The difference between these is ' + variables.difference);

    answer.append(sumOfSqs);
    answer.append(sqOfSums);
    answer.append(difference);
    $('body').append(answer);
  }
};

$('.button').on('click', doStuff.runIt);
