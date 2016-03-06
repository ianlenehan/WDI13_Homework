var makeAccountType = function(name, balance){
  account = {
    name : name,
    balance : balance || 0,
    updateDisplay : function () {
      $balanceEl = $("#"+this.name+"-balance");
      $balanceEl.text("$"+this.balance);
      if(this.balance > 0){
        $balanceEl.removeClass('zero');
      } else {
        $balanceEl.addClass('zero');
      }
    },
    getAmount : function() {
      string = $('#'+this.name+'-amount').val().trim();
      if(string[0] === '$'){
        string = string.slice(1);
      }
      $('#'+this.name+'-amount').val('');
      amount = parseInt(string)
      if (!amount) {
        alert('Please provide a positive number.')
      }
      return amount;
    },
    deposit : function () { //bind to a single account, no hassle.
      amount = this.getAmount();
      if (!amount) {
        return
      }
      this.balance += amount;
      this.updateDisplay();
    }
  };
  account.getAmount = account.getAmount.bind(account);
  account.deposit = account.deposit.bind(account);
//  account.updateDisplay = account.updateDisplay.bind(account); // don't need it... hard to work out the rules.
  account.updateDisplay(); //doesn't seem to work, why?? because you didn't have it in .ready().
  return account;
};

var makeAccountPriorityLists = function (user) {
  names = user.accountNames();
  for (var i = 0; i < names.length; i++) {
    var array = [];
    array[0] = names[i];
    for (var j = 0; j < names.length; j++) {
      array[j+1] = names[j];
    }
    console.log(array);
    user.accounts[names[i]].priorityList = array;
  }
}

var withdraw = function() {
  var account = this.user.accounts[this.name];
  var amount = account.getAmount();
  if (!amount) {
    return false;
  }
  var user = this.user;
  if (user.totalBalance() < amount) {
    alert("ಠ_ಠ you don't have the funds for that ಠ_ಠ")
    return false;
  }
  var names = account.priorityList;
  for (var i = 0; i < names.length; i++) {
    var anAccount = user.accounts[names[i]];
    if (anAccount.balance < amount ){
      amount -= anAccount.balance;
      anAccount.balance = 0;
      anAccount.updateDisplay();
    } else {
      anAccount.balance -= amount
      anAccount.updateDisplay();;
      return true;
    }
  }
}

var makeWithdrawMethods = function(user) {
  names = user.accountNames();
  for (var i = 0; i < names.length; i++) {
    user.accounts[names[i]].withdraw = withdraw.bind(
      {
        name:names[i],
        user:user
      });
  }
}

var makeUser = function () {
  user = {
    accounts : { },
    accountNames : function (){
      return Object.getOwnPropertyNames(this.accounts);
    },
    totalBalance : function () {
      var names = this.accountNames();
      console.log("totalBalance : names", names);
      var total = 0;
      for (var i = 0; i < names.length; i++) {
        total += this.accounts[names[i]].balance;
      }
      return total;
    },
  }
  for (var i = 0; i < arguments.length; i++) {
    name = arguments[i]
    user.accounts[name] = makeAccountType(name);
  }
  makeAccountPriorityLists(user);
  makeWithdrawMethods(user);
  return user;
};

$(document).ready(function(){
  user = makeUser('savings', 'checking');
  $('#checking-deposit').on('click', user.accounts.checking.deposit); //these all shadow this. which is a problem.
  $('#checking-withdraw').on('click', user.accounts.checking.withdraw);
  $('#savings-deposit').on('click', user.accounts.savings.deposit);
  $('#savings-withdraw').on('click', user.accounts.savings.withdraw);
});
