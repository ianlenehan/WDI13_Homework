/* n this homework, you'll create a basic bank in Javascript. The bank has many
accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts. The bank needs a
method that will return the total sum of money in the accounts. It also
needs an addAccount method that will enroll a new account at the bank and
add it to the array of accounts. There is no need to create additional
functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share
a set of common functionality.

Accounts

Accounts have a current balance and owner's name. You should be
able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return
values -- you may also have your functions console.log() values to help
 you see your code working.

You should write a basic story through a series of JavaScript commands
that shows that the methods do indeed work as expected: add some accounts,
show the total balance, make some deposits and withdrawals, show the new
total balance.*/

var bank = {
  accounts: [{
    accountName: 'Daniel Bennetts',
    currentBalance: 10000
  }, {
    accountName: 'Jessica Zhang',
    currentBalance: 500
  }, {
    accountName: 'Austin Powers',
    currentBalance: 200
  }],

  sumOfMoney: function(sum) {
    var sumTotal = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      sumTotal += this.accounts[i].currentBalance;
      console.log(sumTotal);
    }
    return sumTotal;
  },
  addAccount: function(name, balance) {
    var newAccount = {
      accountName: name,
      currentBalance: balance
  };
    this.accounts.push(newAccount);
    console.log();
  },
  deposit: function(name, amount) {
    for (var i = 0; i < this.accounts.length; i++) {
      if (name === this.accounts[i].accountName) {
        // What's the right account (which account has the right name
        this.accounts[i].currentBalance += amount;
        console.log('You have deposited ' + '$' + amount);
        return this.accounts[i].currentBalance;
      }
    }
  },
  withdraw: function(name, amount) {
    for (var i = 0; i < this.accounts.length; i++) {
      if (name === this.accounts[i].accountName) {
        this.accounts[i].currentBalance -= amount;
        console.log('You have withdrawn ' + '$' + amount);
        return this.accounts[i].currentBalance;
      }
    }
  }
};

// var bankAccount = {
//   currentBalance: balance,
//   ownerName: name,
//   deposit: function(amount) {
//     bankAccount.currentBalance += amount;
//     console.log('You have deposited ' + '$' + amount)
//   },
//   withdraw: function(amount) {
//     bankAccount.currentBalance -= amount;
//     console.log('You have withdrawn ' + '$' + amount)
// }
// }
