/* JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

*/

var bank = {
  accounts: [],
  addAccount: function(n, b) {
    // Adds a new account to the accounts array.
    if (bank.getAccount(n) >=0) {
      // Check if account name already exists (this would break getAccount method)
      return "Cannot add account: an account with that name already exists."
    } else {
      bank.accounts.push({
        name: n,
        balance: b,
        deposit: function(amount) {
          this.balance += amount;
        },
        withdraw: function(amount) {
          this.balance -= amount;
        }
      })
    }
  },
  totalBalance: function() {
    // Returns sum of all account balances
    var total = 0;
    for (var i = 0; i < bank.accounts.length; i++) {
      total = total + bank.accounts[i].balance;
    }
    console.log("Total function called. Total = " + total);
    return total;
  },
  getAccount: function(name) {
    // Passes in account name and returns the index of the account
    for (var i = 0; i < bank.accounts.length; i++) {
      if (name === bank.accounts[i].name) {
        return i;
      } else {
        return "No account found for " + name;
      }
    }
  },

};
