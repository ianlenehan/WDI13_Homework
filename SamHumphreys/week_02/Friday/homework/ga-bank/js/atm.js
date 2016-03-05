// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.

var accDetails = {
  chkBalance: 50,
  svsBalance: 100,
  chkAmount: 0,
  svsAmount: 0
};

var doStuff = {
  update: function () {
    $('#checking-balance').html('$ ' + accDetails.chkBalance);
    $('#savings-balance').html('$ ' + accDetails.svsBalance);
    doStuff.validateBalance();
    doStuff.updateVariables();
  },
  validateBalance: function () {
    if (accDetails.chkBalance === 0) {
      $('#checking').css({backgroundColor: '#FF0000'});
    } else {
      $('#checking').css({backgroundColor: '#888888'});
    }
    if (accDetails.svsBalance === 0) {
      $('#savings').css({backgroundColor: '#FF0000'});
    } else {
      $('#savings').css({backgroundColor: '#888888'});
    }
  },
  updateVariables: function () {
    accDetails.chkAmount = parseInt($('#checking-amount').val());
    accDetails.svsAmount = parseInt($('#savings-amount').val());
  },
  chkDeposit: function () {
    doStuff.updateVariables();
    if (isNaN(accDetails.chkAmount) || typeof accDetails.chkAmount !== 'number'){
      doStuff.updateAmounts();
      return;
    }
    accDetails.chkBalance += accDetails.chkAmount;
    doStuff.updateAmounts();
    doStuff.update();
  },
  svsDeposit: function () {
    doStuff.updateVariables();
    if (isNaN(accDetails.svsAmount) || typeof accDetails.svsAmount !== 'number'){
      doStuff.updateAmounts();
      return;
    }
    accDetails.svsBalance += accDetails.svsAmount;
    doStuff.updateAmounts();
    doStuff.update();
  },
  chkWithdrawal: function () {
    doStuff.updateVariables();
    if (isNaN(accDetails.chkAmount) || typeof accDetails.chkAmount !== 'number'){
      doStuff.updateAmounts();
      return;
    }
    if (accDetails.chkBalance < accDetails.chkAmount) {
      doStuff.updateAmounts();
      return;
    } else {
      accDetails.chkBalance -= accDetails.chkAmount;
      doStuff.updateAmounts();
    }
    doStuff.update();
  },
  svsWithdrawal: function () {
    doStuff.updateVariables();
    if (isNaN(accDetails.svsAmount) || typeof accDetails.svsAmount !== 'number'){
      doStuff.updateAmounts();
      return;
    }
    if (accDetails.svsBalance < accDetails.svsAmount) {
      doStuff.updateAmounts();
      return;
    } else {
      accDetails.svsBalance -= accDetails.svsAmount;
      doStuff.updateAmounts();
    }
    doStuff.update();
  },
  updateAmounts: function () {
    $('#savings-amount').val('');
    $('#checking-amount').val('');
  }
};

doStuff.update();
$('#checking-deposit').on('click', doStuff.chkDeposit);
$('#savings-deposit').on('click', doStuff.svsDeposit);
$('#checking-withdraw').on('click', doStuff.chkWithdrawal);
$('#savings-withdraw').on('click', doStuff.svsWithdrawal);
