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

// A function to find the array index based on a client account number

var findClientFromNumber = function(input){
  var searchResult = -1;
  for (i=0; i<jsBank.length; i++) {
    if (input === jsBank[i].accountNumber){
      searchResult = i;
      console.log(jsBank[i].name + ", account number " + jsBank[i].accountNumber +
                " is in jsBank at index " + searchResult);
      return searchResult;
    }
  }
  console.log(input + " is not a valid account number.");
  return searchResult;
}

// A function to find the array index based on a client name

var findClientFromName = function(input){
  var searchResult = -1;
  for (i=0; i<jsBank.length; i++) {
    if (input === jsBank[i].name){
      searchResult = i;
      console.log(jsBank[i].name + ", account number " + jsBank[i].accountNumber +
                " is in jsBank at index " + searchResult);
      return searchResult;
    }
  }
  console.log(name + " is not a client");
  return searchResult;
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


// var getBalance = function(number) {
//   var balance = jsBank[clientNumber].balance;
//   return balance;
// }

// Accounts
//
// Accounts have a current balance and owner's name. You should be able
//  to deposit or withdraw from an account to change the balance.
//

function deposit(finder, amount) {
  var findCode = getClientCode(finder);
  jsBank[findCode].balance += amount;
  console.log(jsBank[findCode].name + "'s new balance in account " +
                jsBank[findCode].accountNumber + " is " +
                jsBank[findCode].balance);
}

function withdraw(clientName, amount){
  var clientNumber = findClientNumber(clientName);
  var clientBalance = getBalance(clientNumber);
  if (clientBalance < amount) {
    console.log(clientName + " has insufficient funds for that withdrawal");
    break;
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
