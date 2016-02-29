// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

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
    if (acc.balance < 0) {
      acc.balance = 0;
    }
    bank.accounts.push(acc);
    console.log(bank.accounts);
  },

  deposit: function (acc, amount) {
    acc.balance += amount;
    console.log('Account of ' + acc.owner + ' has a new balance of $' + acc.balance + ' (an amount of $' + amount + ' is deposited into the account)');
    return acc.balance;
  },

  withdraw: function (acc, amount) {
    if (amount <= acc.balance){
      acc.balance -= amount;
      console.log('Account of ' + acc.owner + ' has a new balance of $' + acc.balance + ' (an amount of $' + amount + ' is withdrawn from the account.)');
      return true;
    } else {
      console.log("Requested withdrawal amount is more than account's balance. Account's balance currently is $"  + acc.balance);
      return false;
    }
  },

  transfer: function (acc1, acc2, amount) {
    if (bank.withdraw(acc1, amount)) {
      bank.deposit(acc2, amount);
    }
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
bank.transfer(bank.accounts[0], bank.accounts[2], 24400);
console.log("Sum of all accounts balances is $" + bank.returnSum());
