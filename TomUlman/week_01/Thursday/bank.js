// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript.
// The bank has many accounts and the following capabilities that
// you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts.

//  The bank needs a method that will return the total sum of
//  money in the accounts.

//It also needs an addAccount method
//  that will enroll a new account at the bank and add it to
//  the array of accounts. There is no need to create additional
//  functions of the bank to delete accounts, etc.




var bank = {
    accounts: [],

    totalSum: function() {
        var total = 0;
        var len = bank.accounts.length;

        for (var i = 0; i < len; i++) {
        total += bank.accounts[i].balance;
        }
        return total;
    },

    addAccount: function(n, b) {
        bank.accounts.push({name:n, balance:b});
    },

    deposit: function(bankacc, deposit) {
        bank.accounts[bankacc].balance += deposit;
        return bank.accounts[bankacc].balance;
    },

    withdraw: function(bankacc, withdrawal) {
        bank.accounts[bankacc].balance -= withdrawal;
          if (bank.accounts[bankacc].balance < 0){
            alert("account cannot be negative")
            bank.accounts[bankacc].balance += withdrawal;
          } else {
        return bank.accounts[bankacc].balance;
        }
    },

    transfer: function(sender, receiver, amount) {
        bank.accounts[sender].balance += amount;
        bank.accounts[receiver].balance -= amount;
          if ((bank.accounts[receiver].balance) < 0
          || (bank.accounts[sender].balance) < 0){
            alert("illegal operation, accounts cannot be" +
            " negative and you cannot transfer in excess")
            bank.accounts[receiver].balance += amount;
            bank.accounts[sender].balance -= amount;
          } else {
        return bank.accounts[sender].balance, bank.accounts[receiver].balance;
          }
    }
};

bank.addAccount('sam', 10);
bank.addAccount('john', 100);






//
// The bank has many accounts. Accounts should be objects that all
// share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be
// able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions
//  return values -- you may also have your functions console.log()
//  values to help you see your code working.
//
// You should write a basic story through a series of JavaScript
// commands that shows that the methods do indeed work as expected:
// add some accounts, show the total balance, make some deposits
// and withdrawals, show the new total balance.


// Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer
// amounts between two accounts.
