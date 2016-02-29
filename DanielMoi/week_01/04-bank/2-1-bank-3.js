/*
JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips

Don't overthink this. Shorter code is probably the answer.

Bonus

Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
Additional

Begin exploring the JavaScript Koans. Fork, clone and start trying them.
*/

var bank = {

  accounts: [{
    name: 'Daniel',
    balance: 150
  }, {
    name: 'Sally',
    balance: 200
  }],

  totalBank: function() {
    var i;
    var total = 0;
    for (i = 0; i < bank.accounts.length; i++) {
      total += bank.accounts[i].balance;
    }
    console.log('Total bank balance: $' + total);
    return total;
  },

  addAccount: function(n, b) {
    bank.accounts.push({
      name: n,
      balance: b
    });
    var message = 'Account added for ' + n + ', with balance of $' + b;
    console.log(message);
    this.totalBank();
    return ;
  },

  deposit: function(n, amt) {
    var message;

    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].name === n) {
        bank.accounts[i].balance += amt;
        message = 'Successfully deposited $' + amt + ' into ' + n + '\'s account! ' + n + '\'s balance: $' + bank.accounts[i].balance;
        console.log(message);
        this.totalBank();
      }
    }
    return;
  },

  withdraw: function(n, amt) {
    var message;

    // find account
    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].name === n) {

        // Check if adequate funds
        if (bank.accounts[i].balance - amt >= 0) {
          bank.accounts[i].balance -= amt;
          message = 'Successfully withdrew $' + amt + ' from ' + n + '\'s account! ' + n + '\'s balance: $' + bank.accounts[i].balance;
          console.log(message);
          this.totalBank();
          return;
        }
        // inadequate funds
        else {
          message = 'Insufficient funds. Trying to withdraw $' + amt + ' would result in $' + (bank.accounts[i].balance - amt);
          console.log(message);
          return;
        }
      }
    }
  },

  transfer: function(n1, n2, amt) {
    var message;

    for (var i = 0; i < bank.accounts.length; i++) {

      // find the FROM account
      if (bank.accounts[i].name === n1) {

        // Check if adequate funds
        if (bank.accounts[i].balance - amt >= 0) {

          // find the TO account
          for (var j = 0; j < bank.accounts.length; j++) {
            if (bank.accounts[j].name === n2) {
                bank.accounts[j].balance += amt;
                message = 'Successfully deposited $' + amt + ' into ' + n2 + '\'s account! ' + n2 + '\'s balance: $' + bank.accounts[j].balance;
                console.log(message);
            }
          }

          // Withdraw from FROM account
          bank.accounts[i].balance -= amt;
          message = 'Successfully withdrew $' + amt + ' from ' + n1 + '\'s account! ' + n1 + '\'s balance: $' + bank.accounts[i].balance;
          console.log(message);
          this.totalBank();
          return;
        }

        // Insufficient funds
        else {
          message = 'Insufficient funds. Trying to withdraw $' + amt + ' would result in $' + (bank.accounts[i].balance - amt);
          console.log(message);
          return;
        }
      }
    }
  }
};

// Let's go

// 1. Check starting bank balance
bank.totalBank(); // Total bank balance: $350

// 2. Add account
bank.addAccount('Tom', 300);

// 3. Deposit money
bank.deposit('Sally', 150);

// 4. Withdraw money
bank.withdraw('Sally', 100);

// 5. Withdraw heaps (will be refused)
bank.withdraw('Sally', 800);

// 6. Transfer money
bank.transfer('Tom', 'Sally', 100);
