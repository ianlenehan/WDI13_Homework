// to do:
// 1. Not a number
// 2. Message

var bank = {



  // Checking Account
  balanceChecking: 40,

  getBalanceChecking: function() {
    return bank.balanceChecking;
  },

  depositChecking: function(amt) {
    bank.balanceChecking += amt;
  },

  withdrawChecking: function(amt) {
    if (bank.balanceChecking - amt < 0) {
      // [?] is it okay to place the function call directly here inside the if statement?
      console.log('negative balance');
      if (bank.overdraftChecking(amt)) {
        console.log('successful Checking overdraft');
        return;
      }
      console.log('overdraft fail');
      return;
    }
    bank.balanceChecking -= amt;
  },

  overdraftChecking: function(amt) {
    if (bank.balanceChecking + bank.balanceSavings - amt < 0) {
      return false;
    }
    bank.balanceSavings -= (amt - bank.balanceChecking);
    bank.balanceChecking = 0;
    console.log(bank.balanceSavings);
    return true;
  },

  // Savings Account
  balanceSavings: 30,

  getBalanceSavings: function() {
    return bank.balanceSavings;
  },

  depositSavings: function(amt) {
    bank.balanceSavings += amt;
  },

  withdrawSavings: function(amt) {
    if (bank.balanceSavings - amt < 0) {
      console.log('negative Savings balance');
      if (bank.overdraftSavings(amt)) {
        console.log('successful Savings overdraft');
        return;
      }
      console.log('overdraft fail');
      return;
    }
    bank.balanceSavings -= amt;
  },
  overdraftSavings: function(amt) {
    if (bank.balanceSavings + bank.balanceChecking - amt < 0) {
      return false;
    }
    bank.balanceChecking -= (amt - bank.balanceSavings);
    bank.balanceSavings = 0;
    return true;
  },








};

bank.getBalanceChecking();
$(document).ready(function() {
  // should this be with/out ()?

  // If accounts are zero
  // [?] this wouldn't have to be here if this was a function declaration
  // var isCheckingZero = function() {
  //   if (bank.balanceChecking === 0) {
  //     // is it okay to access CSS with IDs in jQuery?
  //     $('#checking-balance').addClass('zero');
  //     return;
  //   }
  //   $('#checking-balance').removeClass('zero');
  // };
  //
  // var isSavingsZero = function() {
  //   if (bank.balanceSavings === 0) {
  //     $('#savings-balance').addClass('zero');
  //     return;
  //   }
  //   console.log('savings return');
  //   $('#savings-balance').removeClass('zero');
  // };

  var isZero = function() {
    if (bank.balanceChecking === 0) {
      // is it okay to access CSS with IDs in jQuery?
      $('#checking-balance').addClass('zero');
    } else {
      // place this here, to allow CSS to update properly
      $('#checking-balance').removeClass('zero');
    }

    if (bank.balanceSavings === 0) {
      // is it okay to access CSS with IDs in jQuery?
      $('#savings-balance').addClass('zero');
      // [?] is this return neccesssary?
      return;
    } else {
      $('#savings-balance').removeClass('zero');
    }

  };

  var updateDisplays = function() {
    $('#checking-balance').text('$' + bank.getBalanceChecking());
    $('#savings-balance').text('$' + bank.getBalanceSavings());
    // isCheckingZero();
    // isSavingsZero();
    isZero();
  };

  updateDisplays();



  // Checking Account
  $('#checking-deposit').on('click', function() {
    console.log(typeof bank.balanceChecking);
    bank.depositChecking(parseInt($('#checking-amount').val()));
    console.log(bank.balanceChecking);
    updateDisplays();
  });

  $('#checking-withdraw').on('click', function() {
    bank.withdrawChecking(parseInt($('#checking-amount').val()));
    updateDisplays();
    console.log(bank.balanceChecking);
  });

  // Savings Account
  $('#savings-deposit').on('click', function() {
    bank.depositSavings(parseInt($('#savings-amount').val()));
    console.log(bank.balanceSavings);
    updateDisplays();
  });

  $('#savings-withdraw').on('click', function() {
    bank.withdrawSavings(parseInt($('#savings-amount').val()));
    updateDisplays();
    console.log(bank.balanceSavings);
  });


});
