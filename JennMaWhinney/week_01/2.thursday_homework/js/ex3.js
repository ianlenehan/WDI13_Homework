/*

JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts.
The bank needs a method that will return the total sum of money in the accounts.
It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.
There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

*/


// var menu = {
//     width:  300,
//     height: 200,
//     title: "Menu"
// };
// for(var key in menu) {
//     var val = menu[key];
//     console.log("Key: "+key+" value:"+val);
// }

var bank = [
    {name: 'Jenn', amount: 50},
    // {name: 'Vince', amount: 50}
  ];

// var newAccount= {name:, amount:}

var addAccount = function(money){
    var total = 0;
    for(i = 0; i < banki.amount.length; i++)
    total += bank.amount[i];
  }

var returnTotal = function(money){
  for (var value in bank.amount) {
    var money = bank[value];
    console.log("There is a total of $" + bank.amount + " in the bank.");
}
  return money;


}
returnTotal(bank.amount);


/*
Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values --
you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected:
add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips

Don't overthink this. Shorter code is probably the answer.

Bonus

Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
Additional

Begin exploring the JavaScript Koans. Fork, clone and start trying them.

*/

// var Bank = {[
//   var account1 =
//   {name:" ",
//   accountNumber:
//   amountOfMoney:
//     },
//   var account2 =
//   {name:" ",
//   accountNumber:
//   amountOfMoney:}
//   var account3 =
//   {name:" ",
//   accountNumber:
//   amountOfMoney:}
// ]
// }
//
//
//
// var returnTotal = function(money){
//   return
// }
//
// var addAccount = function(extra){
//
// }
