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
    if (bank.getAccount(n) >= 0) {
      // Check if account name already exists (this would break getAccount method)
      return "Cannot add account: an account with that name already exists.";
    } else if (b < 0) {
      return "Cannot add account: account balance must not be negative";
    } else {
      bank.accounts.push({
        name: n,
        balance: b,
        deposit: function(amount) {
          if (amount < 0) {
            return "Error: deposit must be a positive value.";
          } else {
            this.balance += amount;
          }
        },
        withdraw: function(amount) {
          if (this.checkNegative(this.balance, amount) === true) {
            return "Cannot withdraw: account balance must not be negative. " +
              "You can withdraw up to $" + this.balance;
          } else {
            this.balance -= amount;
          }
        },
        checkNegative: function(balance, change) {
          if (balance - change < 0) {
            return true;
          } else {
            return false;
          }
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
    return total;
  },
  getAccount: function(n) {
    // Passes in account name and returns the index of the account
    for (var i = 0; i < bank.accounts.length; i++) {
      if (n == bank.accounts[i].name) {
        return i;
      } else {
        // do nothing, keep looking! (previously this line was 'return false' - oops)
      }
    }
  },

  transfer: function(sender, receiver, value) {
    var senderIndex = bank.getAccount(sender); // looks up sender name and assigns index
    var recipientIndex = bank.getAccount(receiver); // looks up recipient name and assigns index
    if (bank.accounts[senderIndex].checkNegative(bank.accounts[senderIndex].balance, value) === true) {
      // checkNegative called -- transaction would result in negative balance
      return "Cannot transfer. Insufficient Funds."
    } else {
      // checkNegative called -- transaction would not result in negative balance
      bank.accounts[senderIndex].balance -= value; // transfer value
      bank.accounts[recipientIndex].balance += value;
      return "Transfer Completed."
    }
  }

};

// Story calls:
// bank.addAccount("Emily",800);
// bank.addAccount("Henry",55);
// bank.accounts;
// bank.totalBalance;
// bank.getAccount("Emily");
// bank.accounts[bank.getAccount("Emily")].withdraw(400);
// bank.accounts[bank.getAccount("Henry")].deposit(45);
// bank.accounts;
// bank.accounts[bank.getAccount("Emily")].withdraw(500);
// bank.transfer("Emily","Henry",100);
