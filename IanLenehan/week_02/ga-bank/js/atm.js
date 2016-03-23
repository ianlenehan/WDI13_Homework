var checkingBalance = 0;
var savingsBalance = 0;
var totalBalance = 0;
var pin = '1234';

var catWalk = function() {
  var oldPos = parseInt($('.mainCat').css('left'))
  newPos = (oldPos + 1) + 'px';
  $('.mainCat').css({
    left: newPos,
    transform: 'none'
  });
};


// setting up the actions for when we make a withdrawal
var withdrawalParty = function() {
  $('.audio').attr('src', 'img/money.mp3');
  var timerID = setInterval(catWalk, 5);
  setTimeout(function() {
    clearInterval(timerID);
  }, 4500);

  setTimeout(function() {
    $('.mainCat').fadeOut('slow');
  }, 7000);

  setTimeout(function() {
    // put the cat back to where he was and clear the audio
    $('.mainCat').css({
      left: '-530px',
      display: 'block'
    });
    $('.audio').attr('src', '');
  }, 8000);
};

var depositSound = function() {
  $('.audio').attr('src', 'img/chaching.mp3');
  setTimeout(function() {
    $('.audio').attr('src', '');
  }, 5000);
};

$(document).ready(function() {

  // check the pin number is correct - identified in var pin above
  // responds to keypress on the enter key - id 13
  $('#input-pin').on('keypress', function(event) {
    if ((event.which === 13) && ($('#input-pin').val() === pin)) {
      $('#overlay').css({
        display: 'none'
      })
    }
  })


  ///////// checking ///////////

  // Deposit function:
  $('#checking-deposit').on('click', function() {
    var depositValue = +$('#checking-amount').val(); // gets the depositValue from the form
    checkingBalance = (depositValue + checkingBalance); // updates the checking balance
    totalBalance = (depositValue + totalBalance); // updates the total balance
    $('#checking .balance').text('$' + checkingBalance); //inserts the new balance into the HTML of the balance DIV within the checking DIV
    $('#checking .balance').css({
        'background-color': '#E3E3E3'
      }) // resets the bg color to grey in case it was red
      + $('#checking-amount').val('');
    depositSound();
  });

  // Withdraw function:

  $('#checking-withdraw').on('click', function() {
    var withdrawValue = +$('#checking-amount').val(); // gets the withdraw value from the form
    // make sure there is enough money across both accounts
    if (withdrawValue > totalBalance) {
      alert("You do not have enough cash");
      return;
      // however if there is enough money across both accounts, allow overdraft
    } else if ((withdrawValue > checkingBalance) && (withdrawValue <= totalBalance)) {
      var difference = withdrawValue - checkingBalance; // find variance betw the checking acc & withdrwal
      checkingBalance = 0; // set the checking acc to 0
      savingsBalance = savingsBalance - difference; // subtract what wasn't avail in the checking account from the savings acc
      $('#savings .balance').text('$' + savingsBalance); // set new savings balance
    } else {
      // otherwise we just update checking balance
      checkingBalance = (checkingBalance - withdrawValue)
    }
    // if checking balance = 0, update bg color to red
    if (checkingBalance === 0) {
      $('#checking .balance').css({
        'background-color': 'red'
      })
    }
    totalBalance = (totalBalance - withdrawValue);
    $('#checking .balance').text('$' + checkingBalance); + $('#checking-amount').val('');
    withdrawalParty();
  });

  ///////// savings ///////////

  // Deposit function:
  $('#savings-deposit').on('click', function() {
    var depositValue = +$('#savings-amount').val();
    savingsBalance = (depositValue + savingsBalance);
    totalBalance = (depositValue + totalBalance);
    var currentVal = $('#savings .balance').text();
    $('#savings .balance').text('$' + savingsBalance); + $('#savings-amount').val('');
    $('#savings .balance').css({
      'background-color': '#E3E3E3'
    });
    depositSound();

  });

  // Withdraw function

  $('#savings-withdraw').on('click', function() {
    var withdrawValue = +$('#savings-amount').val();
    if (withdrawValue > totalBalance) {
      alert("You do not have enough cash");
      return;
    } else if ((withdrawValue > savingsBalance) && (withdrawValue <= totalBalance)) {
      var difference = withdrawValue - savingsBalance;
      savingsBalance = 0;
      checkingBalance = checkingBalance - difference;
      $('#checking .balance').text('$' + checkingBalance);
    } else {
      savingsBalance = (savingsBalance - withdrawValue)
    }
    if (savingsBalance === 0) {
      $('#savings .balance').css({
        'background-color': 'red'
      })
    }
    totalBalance = (totalBalance - withdrawValue);
    $('#savings .balance').text('$' + savingsBalance); + $('#savings-amount').val('');
    withdrawalParty();
  });


});
