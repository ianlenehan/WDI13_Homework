/*
JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many
accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts. The bank needs a
method that will return the total sum of money in the accounts. It also needs an
addAccount method that will enroll a new account at the bank and add it to the
array of accounts. There is no need to create additional functions of the bank
to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of
common functionality.

Accounts

Accounts have a current balance and owner's name. You should be able to deposit
or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values --
you may also have your functions console.log() values to help you see your code
working.

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
  accounts: [{
      name: 'John "Hannibal" Smith',
      balance: 210000
  }, {
      name: 'BA Baracus',
      balance: 147000
  }],

  // Create a method to sum up total of all accounts.
  vault: function() {
      var total = 0;
      for (var i = 0; i < bank.accounts.length; i++) {
          total += bank.accounts[i].balance;
      }
      console.log('Money in the bank: $' + total);
      return total;
  },

  // Create a method to check if this person is already a customer
  isCustomer: function(name) {
      var numAccounts = bank.accounts.length;
      var namesChecked;
      for (var i = 0; i < numAccounts; i++) {
          if (name === bank.accounts[i].name) {
              return true;
          }
      }
  },

  // Create a method to add new accounts
  // while checking to ensure they don't already exist
  addAccount: function(name, balance) {
      var match = bank.isCustomer(name);
      if (match) {
          console.log(name + " is already a customer!");
          return false;
      } else {
          bank.accounts.push({
              name: name,
              balance: balance
          });
          console.log(name + " and their $" + balance + " have now been added to the bank.");
          return name + " and their $" + balance + " have now been added to the bank."
      }
  },

  // Create a method to withdraw money from an account
  withdraw: function(name, money) {
      //first check this this person is already a customer
      var match = bank.isCustomer(name);
      if (!match) {
          console.log(name + " is not currently a customer!");
          return false;
      } else {
          // if they are, find their name and update their account
          // unless the withdrawal is more than their current balance
          for (var i = 0; i < bank.accounts.length; i++) {
              if (name === bank.accounts[i].name) {
                  if (money > bank.accounts[i].balance) {
                      console.log("Sorry, you have no overdraft facility.");
                      return false;
                  } else {
                      bank.accounts[i].balance -= money;

                      console.log(name + " has withdrawn $" + money +
                       " and they now have $" + bank.accounts[i].balance);
                      return bank.accounts[i].balance;
                  }
              }
          }
      }
  },

  // Create a method to deposit money to an account
  deposit: function(name, money) {
      //first check this this person is already a customer
      var match = bank.isCustomer(name);
      if (!match) {
          console.log(name + " is not currently a customer!");
          return false;
      } else {
          // if they are, find their name and update their account
          for (var i = 0; i < bank.accounts.length; i++) {
              if (name === bank.accounts[i].name) {
                  bank.accounts[i].balance += money;
                  console.log(name + " has deposited $" + money +
                   " and they now have $" + bank.accounts[i].balance);
                  return bank.accounts[i].balance;
              }
          }
      }
  },

  // Create a method to check current balances
  displayBalance: function(name) {
      //first check this this person is already a customer
      var match = bank.isCustomer(name);
      if (!match) {
          console.log(name + " is not currently a customer!");
          return false;
      } else {
          // if they are, find their name and update their account
          for (var i = 0; i < bank.accounts.length; i++) {
              if (name === bank.accounts[i].name) {
                  var currentBalance = bank.accounts[i].balance;
                  console.log(name + " currently has $" + currentBalance +
                      " in their account.");
                  return bank.accounts[i].balance;
              }
          }
      }
  },

  // write a method to allow tranfers between accounts
  // transferMoney: function(fromName, toName, amt) {
  //   //run both the withdraw and deposit methods
  //   //these will check that both customers exist, so no need to run it again
  //   bank.withdraw(fromName, amt);
  //   bank.deposit(toName, amt);
  //   //check new balances using displayBalance method
  //   var fromBalance = bank.displayBalance(fromName);
  //   var toBalance   = bank.displayBalance(toName);
  //   console.log(fromName + " now has $" + fromBalance + " while " + toName +
  //    " now has $" + toBalance);
  // },

  transferMoney: function(fromName, toName, amt) {
      // first check these are already customers
      var match1 = bank.isCustomer(fromName);
      var match2 = bank.isCustomer(toName);
      if (!match1) {
          console.log(fromName + " is not currently a customer!");
          return false;
      } else if (!match2) {
          console.log(toName + " is not currently a customer!");
          return false;
          // if they are, find them and update their accounts
      } else {
        bank.withdraw(fromName, amt);
        bank.deposit(toName, amt);
          //first we withdraw
          //Unfortunately this doesn't work: bank.withdraw(fromName, amt);
          //It updates the historical balance instead of the current balance
          // for (var j = 0; j < bank.accounts.length; j++) {
          //     if (fromName === bank.accounts[j].name) {
          //         bank.accounts[j].balance -= amt;
          //     }
          // }
          //then we deposit
          // for (var k = 0; k < bank.accounts.length; k++) {
          //     if (toName === bank.accounts[k].name) {
          //         bank.accounts[k].balance += amt;
          //         console.log(fromName + " has transferred $" + amt + " to " +
          //          toName + ".");
          //         return true;
          //     }
      }
  }
} //end




bank.vault();                                   //Displays total of all balances
bank.addAccount('Templeton Peck', 125000);      //Adds a new account
bank.addAccount('Howling Mad Murdock', 125000); //Add another new account
bank.addAccount('BA Baracus', 125000);          //Tries to add existing customer as new
bank.vault();                                   //Updates current total of all balances
bank.withdraw('Templeton Peck', 255000);        //Withdraws too much money
bank.withdraw('John "Hannibal" Smith', 5000);   //Withdraws money
bank.withdraw('Joe Smith', 5000);               //Withdraws money for non-customer
bank.deposit('BA Baracus', 10000);              //Deposits money
bank.deposit('Joe Smith', 10000);               //Deposits money for non-customer
bank.displayBalance('John "Hannibal" Smith')      //Displays current balance
bank.transferMoney('John "Hannibal" Smith', 'BA Baracus', 100000) //Transfers money between accounts
bank.displayBalance('John "Hannibal" Smith')     //Displays current balance after transfer
bank.displayBalance('BA Baracus')     //Displays current balance after transfer
bank.vault();                                   //Updates current total of all balances
