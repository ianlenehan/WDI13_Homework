leapYear = {
  isLeapYear : function (year) {
    if (year%400 === 0) {
      return true;
    }
    if (year%100 === 0) {
      return false;
    }
    return year%4 === 0;
  },
  getYear : function () {
    return parseInt($('.year').val());
  },
  giveAnswer : function(year) {
    var message;
    if (this.isLeapYear(year)) {
      message = "Yep, its a leap year.";
    } else {
      message = "Nah, that's not a leap year";
    }
    $('.decision').text(message);
  }
};

$(document).ready( function() {
  $("button").on('click', function () {
    var year = parseInt($('.year').val());
    console.log(year);
    leapYear.giveAnswer(year);
  });
});
