// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
//
// Don't overthink this. Shorter code is probably the answer.

var bank = {
  accounts: [],

  returnSum: function () {
    var sum = 0;
    for (var i = 0; i < bank.accounts.length; i++) {
      sum += bank.accounts[i].balance;
    }
    console.log(sum);
    return sum;
  },

  addAccount: function (acc) {
    bank.accounts.push(acc);
    console.log(bank.accounts);
  },

  deposit: function (acc, amount) {
    acc.balance += amount;
    console.log('Account of ' + acc.owner + ' has a new balance of ' + acc.balance + '(an amount of $' + amount + 'is deposited into account)');
    return acc.balance;
  },

  withdraw: function (acc, amount) {
    acc.balance -= amount;
    console.log('Account of ' + acc.owner + ' has a new balance of ' + acc.balance + '(an amount of $' + amount + 'is withdrawn from account)');
    return acc.balance;
  }
};

bank.addAccount({
  owner: "John",
  balance: 10000
});
bank.addAccount({
  owner: "Deborah",
  balance: 15000
});
bank.addAccount({
  owner: "Julie",
  balance: 1000
});
console.log("Sum of all accounts balances is $" + bank.returnSum());
bank.withdraw(bank.accounts[1], 6000);
bank.deposit(bank.accounts[0], 5000);
bank.withdraw(bank.accounts[0], 4000);
bank.deposit(bank.accounts[2], 3000);
bank.withdraw(bank.accounts[2], 3500);
bank.deposit(bank.accounts[2], 1500);
console.log("Sum of all accounts balances is $" + bank.returnSum());
//console.log(bank.accounts);
