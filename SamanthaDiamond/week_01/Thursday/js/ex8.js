/*  JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank
has many accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank has an array of accounts. The bank needs a
method that will return the total sum of money in the accounts. It also needs
an addAccount method that will enroll a new account at the bank and add it to
the array of accounts. There is no need to create additional functions of the
bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of
common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to deposit
or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values
-- you may also have your functions console.log() values to help you see your
code working.

You should write a basic story through a series of JavaScript commands that
shows that the methods do indeed work as expected: add some accounts, show the
total balance, make some deposits and withdrawals, show the new total balance.

Tips
Don't overthink this. Shorter code is probably the answer.

Bonus
Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two
accounts.
*/

var bank = {
  accounts: [
    {name: "tahra",
     balance: 100},
    {name: "dactyl",
     balance: 5000}
  ],
  totalSum: function () {
    var sumOfMoney = 0;
    for (var i = 0; i < bank.accounts.length; i++) {
      sumOfMoney += bank.accounts[i].balance;
      console.log(sumOfMoney);
    };
    return sumOfMoney;
  },
  addAccount: function (n, b) {
    var newAccount = {name: n, balance: b}
    bank.accounts.push(newAccount);
    console.log(newAccount);
    return newAccount;

  },
  deposit: function (n, amount) {
    for (var i = 0; i < bank.accounts.length; i++) {
      var balance;
      if (bank.accounts[i].name === n) {
        bank.accounts[i].balance += amount;
        balance = bank.accounts[i].balance;
      };
    };
    console.log("The current balance of", n, "is", balance);
    return balance;
  },
  withdrawal: function (n, amount) {
    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].name === n) {
        if (bank.accounts[i].balance >= amount) {
          bank.accounts[i].balance -= amount;
          };
      };
    };
    console.log("The current balance of", n, "is", balance);
    return balance;
  },

  transfer: function (n1, n2, amount) {
    var n1Balance = bank.withdrawal(n1, amount);
    var n2Balance = bank.deposit(n2,amount);
    return n1Balance, n2Balance;
  }
}
