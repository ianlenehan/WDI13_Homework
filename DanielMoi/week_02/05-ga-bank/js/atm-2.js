
var bank = {

  accChecking: {
    name: 'Checking',
    balance: 40,
    other: 'accSavings'
  },

  accSavings: {
    name: 'Savings',
    balance: 30,
    other: 'accChecking'
  },

  message: '',

  deposit: function(acc, amt) {
    var validatedAmt = bank.validate(amt);

    // Valid amount
    if (validatedAmt) {
      acc.balance += validatedAmt;
      bank.message = 'Successful deposit of $' + validatedAmt + ' into ' + acc.name;
    }

    // Invalid amount
    else {
      bank.message = 'Please enter a valid amount';
      return false;
    }
  },

  withdraw: function(acc, amt) {
    var validatedAmt = bank.validate(amt);
    var otherBalance = bank[acc.other].balance;

    // Valid Amount
    if (validatedAmt) {

      // Successful withdrawal
      if (acc.balance - validatedAmt >= 0) {
        bank.message = 'Successful withdrawal of $' + validatedAmt + ' from ' + acc.name;
        acc.balance -= validatedAmt;
      }

      // See if overdraft is possible
      else if (otherBalance - (validatedAmt - acc.balance) >= 0) {
        bank.message = 'Insufficient funds in ' + acc.name + ', but successful overdraft from ' + bank[acc.other].name;
        // can't use otherBalance here (need to change actual object)
        bank[acc.other].balance -= (validatedAmt - acc.balance);
        acc.balance = 0;
      }

      // Both withdrawal and overdraft fail
      else {
        bank.message = 'Sorry, insufficient funds in both accounts';
      }
    }

    // Invalid amount
    else {
      bank.message = 'Please enter a valid amount';
    }
  },



  validate: function(amt) {
    var parseAmt = parseInt(amt);
    if (typeof parseAmt !== 'number') {
      return false;
    } else if (parseAmt < 0) {
      return false;
    } else {
      return parseAmt;
    }
  }
};


$(document).ready(function() {
  var isZero = function() {
    if (bank.accChecking.balance === 0) {
      // is it okay to access CSS with IDs in jQuery?
      $('#checking-balance').addClass('zero');
    } else {
      $('#checking-balance').removeClass('zero');
    }
    if (bank.accSavings.balance === 0) {
      $('#savings-balance').addClass('zero');
    } else {
      $('#savings-balance').removeClass('zero');
    }
  };

  var updateDisplays = function() {
    $('#checking-balance').text('$' + bank.accChecking.balance);
    $('#savings-balance').text('$' + bank.accSavings.balance);
    $('.message').text(bank.message);

    isZero();
  };

  updateDisplays();

  // Checking Account
  $('#checking-deposit').on('click', function() {
    bank.deposit(bank.accChecking, $('#checking-amount').val());
    updateDisplays();
  });


  $('#checking-withdraw').on('click', function() {
    bank.withdraw(bank.accChecking, $('#checking-amount').val());
    updateDisplays();
  });

  // Savings Account
  $('#savings-deposit').on('click', function() {
    bank.deposit(bank.accSavings, $('#savings-amount').val());
    updateDisplays();
  });

  $('#savings-withdraw').on('click', function() {
    bank.withdraw(bank.accSavings, $('#savings-amount').val());
    updateDisplays();
  });


});
