// to do:
// 1. Not a number
// 2. Message
// 3. Make stuff private

var bank = {

  accChecking: {
    name: 'checking',
    balance: 40,
    other: 'accSavings'
  },

  accSavings: {
    name: 'savings',
    balance: 30,
    other: 'accChecking'
  },

  deposit: function(acc, amt) {
    var validatedAmt = bank.validate(amt);

    if (validatedAmt) {
      acc.balance += validatedAmt;
    } else {
      return false;
    }
  },

  withdraw: function(acc, amt) {
    var validatedAmt = bank.validate(amt);
    var otherBalance = bank[acc.other].balance;
    if (validatedAmt) {

      if (acc.balance - validatedAmt >= 0) {
        console.log('withdrawal successul');
        acc.balance -= validatedAmt;
      }
      else if (otherBalance - (validatedAmt - acc.balance) >= 0) {
        console.log('insufficient funds, but overdraft successful');
        // can't use otherBalance here (need to change actual object)
        bank[acc.other].balance -= (validatedAmt - acc.balance);
        // console.log(acc.balance, otherBalance, otherBalance - (validatedAmt - acc.balance));
        acc.balance = 0;
      }
      else {
        console.log('insufficient funds in both accounts');
      }
    }
    else {
      console.log('please enter a valid amount');
    }



  },



  validate: function(amt) {
    var parseAmt = parseInt(amt);
    if (typeof parseAmt !== 'number') {
      return false;
    } else if (parseAmt < 0) {
      return false;
    } else {
      // console.log(typeof parseAmt);
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
    console.log(bank.accChecking.balance);
    $('#checking-balance').text('$' + bank.accChecking.balance);
    $('#savings-balance').text('$' + bank.accSavings.balance);

    // $('#savings-balance').text('$' + bank.getBalanceSavings());
    // isCheckingZero();
    // isSavingsZero();
    isZero();
  };

  updateDisplays();

  // Checking Account
  $('#checking-deposit').on('click', function() {
    bank.deposit(bank.accChecking, $('#checking-amount').val());
    updateDisplays();
    console.log(bank.accChecking.balance);
  });


  $('#checking-withdraw').on('click', function() {
    bank.withdraw(bank.accChecking, $('#checking-amount').val());
    updateDisplays();
    console.log(bank.accChecking.balance);
  });

  // Savings Account
  $('#savings-deposit').on('click', function() {
    bank.deposit(bank.accSavings, $('#savings-amount').val());
    console.log(bank.accSavings.balance);
    updateDisplays();
  });

  $('#savings-withdraw').on('click', function() {
    bank.withdraw(bank.accSavings, $('#savings-amount').val());
    updateDisplays();
  });


});
