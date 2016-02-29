
////////////////////////////////////
//////////////////////////////////
/*
var bank = {
  accounts: [
    {
      name: "Dale Chapman",
      accountBalance: "11,500"
    },{
      name: "Expecto Patronum",
      accountBalance: "400"
    },{
      name: "Uwot Bruv",
      accountBalance: "1337"
    }
  ]
};*/
var accounts = [{
    name: "Dale Chapman",
    balance: 11500
}, {
    name: "Expecto Patronum",
    balance: 400
}, {
    name: "okay mate",
    balance: 1337
}]


for (var i = 0; i < accounts.length; i++) {
    var accounts = accounts[i];
    console.log(accounts.name + "'s account balance is " + accounts.balance + ".");
}
var bankDetails = function(name) {
    console.log("account balance is " + accounts.balance + " owned by " + accounts.name);
}
bankDetails([1])


var deposit = function(name, balance) {
    var addMoney = function(amount) {
        accounts.balance += amount;
        (console.log("you have deposited" + amount + "you now have" + accounts.balance));
        return accounts.balance;
    }
}
deposit([1], 600);



var addAccount = function(name, balance) {
    var newAccount = { name: n, balance: b}
        accounts.push(newAccount);
        console.log(newAccount);
        return newAccount;
};
/*
var checkBankAccount = function() {
  var totalMoney = 0;
  for (var i = 0; i < bank.name; i++) {
    bank.accounts[i];
  }
}
console.log("display " + checkBankAccount((bank.name)))

var addAccount = function() {
  var add = addBankAccount;

}
*/
