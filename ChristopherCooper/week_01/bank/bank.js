
var accounts = [
  {
    owner: 'Mrs Fields',
    balance: 600.14
  },
  {
    owner: 'Mr Miyagi',
    balance: 16088322.67
  },
  {
    owner: 'Mrs Doubtfire',
    balance: 120034.34
  }
]


var showAccount = function(name){

  for (var i = 0; i < accounts.length; i++){
    if (name === accounts[i].owner){
      document.getElementById('accounts').innerHTML = 'Account Name: ' + accounts[i].owner;
      document.getElementById('balance').innerHTML = '$ ' + accounts[i].balance;
    }
  }
}


// var showAllAccounts = function()
//   x = accounts.length;
// {
//   document.getElementsByClassName('className').innerHTML = accounts[x].owner;
// }


var getTotalBankMoney =  function (){
  var money = 0;

  for (var i = 0; i < accounts.length; i++){
    money += accounts[i].balance;
  }
  return money;
};


var addAccount = function(owner, balance){
  x = owner;
  y = balance;
  accounts.push({owner:x, balance:y});
};


var addMoney = function(name,deposit){

  var x = deposit;

  for (var i = 0; i < accounts.length; i++){
    if (name === accounts[i].owner){
      accounts[i].balance += x;
      showAccount(name);
    }
  }
}

var withDrawMoney = function(name,withdrawal){

  var x = withdrawal;

  for (var i = 0; i < accounts.length; i++){
    if (name === accounts[i].owner){
      accounts[i].balance -= x;
      showAccount(name);
    }
  }
}


var transferMoney = function(name, amount, name2){

  x = amount;

  for (var i = 0; i < accounts.length; i++){
    if (name === accounts[i].owner){
      accounts[i].balance -= x;
      showAccount(name);
    }
  }

  for (var j = 0; j < accounts.length; j++){
    if (name2 === accounts[j].owner){
       accounts[j].balance += x;
    }
  }
}
