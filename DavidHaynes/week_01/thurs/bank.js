/*
JavaScript Bank
In this homework, you'll create a basic bank in Javascript.
The bank has many accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts.
The bank needs a method that will return the total sum of money in the accounts.
It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.
There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts

Accounts have a current balance and owner's name.
You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values --
you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands
that shows that the methods do indeed work as expected: add some accounts,
show the total balance, make some deposits and withdrawals,
show the new total balance.

Tips

Don't overthink this. Shorter code is probably the answer.

Bonus

Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
Additional

Begin exploring the JavaScript Koans. Fork, clone and start trying them.
*/

var bank = [
  {
    totalBalance: function() {           // totalBalance should add all the balances of each acct together.
      var balance = 0;
      for (var i = 1; i < bank.length; i++ ) {
        balance = balance + bank[i].balance;
      }
      return balance;
    }
  },
  { owner:    "David Haynes",
    balance:  1000000
  },
  { owner:    "Tom Smith",
    balance:  550
  }
]


var addAcconut = function (name, cash) {
  if (cash >= 0) {                            // This is to ensure there is not negative balance
      bank.push({owner: name, balance: cash});
      console.log(bank);
  } else {
      console.log("Cannot add account with a negative balance.")
  }
}


var bankBalance = function () {
      var check = bank[0].totalBalance();
      return check;
    }


var deposit = function (name, amount) {
    var noAccount = 0
    for (var i = 1; i < bank.length; i++) {
        if (bank[i].owner === name) {
            bank[i].balance += amount;
            console.log("$" + amount + " has been deposited into the account for " + name + ", the new balance is $" +bank[i].balance);
        } else {
            noAccount += 1;
        }
    }
    if (noAccount === bank.length -1) {
      return "There is no account with this name."
    }
}


var withdraw = function (name, amount) {
    var noAccount = 0

    for (var i = 1; i < bank.length; i++) {
        if (bank[i].owner === name) {
            if (amount <= bank[i].balance) {              // this is to ensure there cannot be a negative balance
                bank[i].balance -= amount;
                console.log("$" + amount + " has been withdrawn from the account for " + name + ", the new balance is $" +bank[i].balance);
            } else {
              console.log("There is not enough money in this account to complete this transaction");
            }
        } else {
            noAccount += 1;
        }
      }
      if (noAccount === bank.length -1) {
        return "There is no account with this name."
      }
}


var transfer = function (nameFrom, nameTo, amount) {          // This is a simple transfer, assumes that all inputs are correct
      var currentBalance = bankBalance();
      withdraw(nameFrom, amount);
      deposit(nameTo, amount);
      if (currentBalance = bankBalance() {                    // if statement only exists to ensure no negative balance.
            console.log ("$" + amount + " has been transferred from account owner " + nameFrom + " to account owner " + nameTo);
      } else if (currentBalance < bankBalance()) {
            withdraw(nameTo, amount);
            console.log("Please check the details for the FROM account");)
      }
}

var transfer2 = function (nameFrom, nameTo, amount) {       // This transfer is more complicated, it will ensure all inputs are correct
      var noAccount = 0
      var currentBalance = bankBalance();                   // takes snapshot of  bankBalance
      withdraw(nameFrom, amount);
      deposit(nameTo, amount);
      if (currentBalance === bankBalance()) {               // if =, two outcomes possible, worked perfectly or neither worked
        for (var i = 1; i < bank.length; i++) {
            if (bank[i].owner === nameFrom) {
                console.log ("$" + amount + " has been transferred from account owner " + nameFrom + " to account owner " + nameTo);
            } else {
              noAccount += 1
            }
            if (noAccount === bank.length -1) {
              return "Both account names are incorrect."
            }
          }
      } else if (currentBalance > bankBalance()) {          // if TO account incorrect, only withdraw function will have operated
          deposit(nameFrom, amount);                        // reversing withdraw
          console.log("Please check the details for the TO account");
      } else if (currentBalance < bankBalance()) {          // if FROM account incorrect, only deposit function will have operated
          withdraw(nameTo, amount);                         // reversing deposit
          console.log("Please check the details for the FROM account");
    }
}
