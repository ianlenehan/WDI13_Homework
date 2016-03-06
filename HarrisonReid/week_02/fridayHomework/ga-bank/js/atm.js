// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdrsaw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer? (**D**on't **R**epeat **Y**ourself)

ATM = {
  checkingBalance: 0,
  savingsBalance: 0,
  setUp: function() {
    // Called on page load
    this.updateAccountUI('savings');
    this.updateAccountUI('checking');
    this.assignButtonListeners();
  },
  assignButtonListeners: function() {
    // Assign listeners to deposit and withdraw buttons
    $('#checking-deposit').on('click', function() {
      ATM.deposit("checking");
    });
    $('#checking-withdraw').on('click', function() {
      ATM.withdraw("checking");
    });
    $('#savings-deposit').on('click', function() {
      ATM.deposit("savings");
    });
    $('#savings-withdraw').on('click', function() {
      ATM.withdraw("savings");
    });
  },
  updateAccountUI: function(account) {
    // Check provided account balance and update the UI as appropriate, to be called after every successful account transaction.
    var accountDisplay;
    // Store applicable account display
    if (account === 'checking') {
      accountDisplay = $('#checking-balance');
    } else if (account === 'savings') {
      accountDisplay = $('#savings-balance');
    }
    // Check if zero balance warning needs to be applied or removed
    if (this.getBalance(account) === 0 && !accountDisplay.hasClass('zero')) {
      accountDisplay.addClass('zero');
    } else if (this.getBalance(account) > 0 && accountDisplay.hasClass('zero')) {
      accountDisplay.removeClass('zero');
    }
    // Update the balance displayed to reflect the correct current balance
    $(accountDisplay).text("$" + this.getBalance(account));
  },
  getBalance: function (account) {
    if (account === "checking") {
      return this.checkingBalance;
    } else if (account === "savings") {
      return this.savingsBalance;
    }
  },
  setBalance: function (account, amount) {
    if (account === "checking") {
      this.checkingBalance = amount;
    } else if (account === "savings") {
      this.savingsBalance = amount;
    }
  },
  getInputAmount : function (account) {
    var amount;
    // Get the stored amount.
    if (account === 'savings') {
      amount = $('#savings-amount').val();
    } else if (account === 'checking') {
      amount = $('#checking-amount').val();
    }
    return parseInt(amount);
  },
  deposit: function(account) {
    // Deposit into account
    var requestedDeposit = this.getInputAmount(account);
    // Check account that's required.
    if (account === 'savings') {
      this.savingsBalance += requestedDeposit;
      this.updateAccountUI('savings');
      return "Succesful transaction.";
    } else if (account === 'checking') {
      this.checkingBalance += requestedDeposit;
      this.updateAccountUI('checking');
      return "Succesful transaction.";
    }
  },
  withdraw: function(account) {
    // Withdraw from account
    var requestedWithdraw = this.getInputAmount(account);
    var accountBalance = this.getBalance(account);
    var overallBalance = this.getBalance('checking') + this.getBalance('savings');
    // Reject transaction if overall balance too low
    if (overallBalance < requestedWithdraw) {
      return "Transaction failed. Insufficient funds.";
    } else if (accountBalance >= requestedWithdraw) { // If enough in requested account, transact.
      this.setBalance(account, (accountBalance - requestedWithdraw));
      this.updateAccountUI(account);
    } else { // Else if enough in both withdraw from both
      this.setBalance(account, 0);
      if (account === 'savings') {
        this.setBalance('checking', (overallBalance - requestedWithdraw));
        this.updateAccountUI('savings');
        this.updateAccountUI('checking');
      } else if (account === 'checking') {
        this.setBalance('savings', (overallBalance - requestedWithdraw));
        this.updateAccountUI('savings');
        this.updateAccountUI('checking');
      }
    }
    return "Successful transaction.";
  }
};

$(document).ready(function() {
  ATM.setUp();
});
