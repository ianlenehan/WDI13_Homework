// JavaScript Bank
//
// There is only one bank. This bank has an array of accounts. The bank
//  needs a method that will return the total sum of money in the accounts.
//   It also needs an addAccount method that will enroll a new account at
//    the bank and add it to the array of accounts. There is no need to
//     create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a
//  set of common functionality.

var jsBank = [
  {name: 'sam',
  accountNumber: 1823,
  balance: 500},
  {name: 'huw',
  accountNumber: 4439,
  balance: 300},
  {name: 'amy',
  accountNumber: 9992,
  balance: 2500},
  {name: 'cynthia',
  accountNumber: 1122,
  balance: 890}
];
var searchResult = -1;

// A function to find the array index based on a client account number

var findClientFromNumber = function(input){
  var searchResult = -1;
  for (i=0; i<jsBank.length; i++) {
    if (input === jsBank[i].accountNumber){
      searchResult = i;
      return searchResult;
    }
  }
//  return openAccount();
}

// A function to find the array index based on a client name

var findClientFromName = function(input){
  var searchResult = -1;
  for (i=0; i<jsBank.length; i++) {
    if (input === jsBank[i].name){
      searchResult = i;
      return searchResult;
    }
  }
//  return openAccount();
}

var getClientCode = function(input) {
  if (typeof input === "number") {
    clientCode = findClientFromNumber(input);
  }
  if (typeof input === "string") {
    clientCode = findClientFromName(input);
  }
  return clientCode;
}


var getBalance = function(input) {
  var findCode = getClientCode(input);
  jsBkAc = jsBank[findCode];
  var balance = jsBkAc.balance;
  return balance;
}

var checkBalance = function(input) {
  var findCode = getClientCode(input);
  jsBkAc = jsBank[findCode];
  if (jsBkAc === undefined) {
    console.log("That is not a valid account.");
    return;
  }
  var balance = jsBkAc.balance;
  console.log("The balance in account number " + jsBkAc.accountNumber +
                " in the name of " + jsBkAc.name + " is " + balance);
}

// Accounts
//
// Accounts have a current balance and owner's name. You should be able
//  to deposit or withdraw from an account to change the balance.
//

function deposit(finder, amount) {
  var findCode = getClientCode(finder);
  jsBkAc = jsBank[findCode];
  jsBkAc.balance += amount;
  console.log(jsBkAc.name + "'s new balance in account " +
                jsBkAc.accountNumber + " is " +
                jsBkAc.balance);
}

function withdraw(finder, amount){
  var findCode = getClientCode(finder);
  jsBkAc = jsBank[findCode];
  var clientBalance = getBalance(findCode);
  if (clientBalance >= amount) {
    jsBkAc.balance -= amount;
    console.log(jsBkAc.name + ' has withdrawn ' + amount +
                  ' from their account number ' +
                   jsBkAc.accountNumber);
    console.log("The new account balance of account " +
                  jsBkAc.accountNumber + ' is ' +
                  jsBkAc.balance);
  } else {
    console.log('Account number ' + jsBkAc.accountNumber +
                  ' in the name ' + jsBkAc.name +
                  ' has insufficient funds.');
    console.log(jsBkAc.name + ' can not withdraw $' + amount +
                  '; the balance is only $' + clientBalance);
    return;
  }
}

//make a random account number, and check that it doesn't already exist.
//If it already exists then try again, otherwise return the random number.

function createRandomAccountNum() {
}

function openAccount() {
  var wantToOpen = prompt ("Would you like to open an account? y or n");
  if (wantToOpen === "y") {
    var newName = prompt("Please enter the new account name");
    var findCode = findClientFromName(newName);
    var jsBkAc = jsBank[findCode];
    if (findCode !== -1) {
      console.log("That account already exists, account number " +
                    jsBkAc.accountNumber + " in the name " + jsBkAc.name);
    } else if (findCode === -1) {
    jsBank.push({name: newName, accountNumber: 0, balance: 0});
    console.log(jsBank);
    }
  } else if (wantToOpen === "n") {
    console.log("Ok, have a nice day...");
  } else {
    alert("Please enter either y or n");
    return openAccount();
  }
}

// There is no need to write a user interface. Make sure functions return
//  values -- you may also have your functions console.log() values to help
//   you see your code working.
//
// You should write a basic story through a series of JavaScript commands
//  that shows that the methods do indeed work as expected: add some accounts,
//   show the total balance, make some deposits and withdrawals, show the new
//    total balance.
//
// Tips
//
// Don't overthink this. Shorter code is probably the answer.

// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts
//  between two accounts.
