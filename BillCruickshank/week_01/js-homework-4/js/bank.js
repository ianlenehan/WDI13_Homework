// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

var makeAccount = function (n, b){
  return {
    name:n,
    balance:b
  };
}

bank = {
  accounts : [],

  addAccount : function (a, n, b){
    if(a === null){
      a= makeAccount(n, b);
    }
    this.accounts.push(a);
  },

  totalDeposits : function (){
    return this.accounts.map(
      function(account){
        return account.balance;
      }
    ).reduce(function(a, b){return a+b}, 0)
  },

  reset : function(){
    this.accounts = []
  },

//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//


// Initially had these two outside the bank. That doesn't quite make sense though.

  deposit : function (account, amount){
    if(amount < 0){
      console.log("ಠ_ಠ " + account.name + ", deposits are for positive amounts ಠ_ಠ");
      return false;
    }
    account.balance += amount;
    console.log(account.name+", your balance is now", account.balance);
    return true;
  },

  withdraw : function (account, amount){
    if(amount < 0){
      console.log("If you want to withdraw negative money, try a deposit instead.");
      return false;
    }
    if(amount > account.balance){
      console.log("ಠ_ಠ Not enough funds", account.name, "ಠ_ಠ");
      return false;
    }
    account.balance -= amount;
    console.log(account.name+", your balance is now", account.balance);
    return true;
  },

  transfer : function (account1, account2, amount) {
    if (account1 === account2) {
      console.log("haven't you got better things to do than "+
                  "transfer money to and from yourself?")
      return false;
    }
    if (this.withdraw(account1, amount)) {
      console.log(account1.name, "transferred", amount, "to", account2.name);
      return this.deposit(account2, amount);
    } else {
      console.log("Your transfer has failed.");
      return false;
    }
  }
}

bank.addAccount(null, "bill", "0ish");
console.log(bank.totalDeposits());
bank.addAccount(null, "joel", "a whole lot more");
console.log(bank.totalDeposits());
bank.reset();

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

bill = makeAccount("Bill", 0);
josh = makeAccount("Josh", 100);
emilly = makeAccount("Emilly", 50);
joel = makeAccount("Joel", 400);

bank.addAccount(bill);
bank.addAccount(josh);
bank.addAccount(emilly);
bank.addAccount(joel);
console.log(bank.totalDeposits());
// bill finds 50 bucks
bank.deposit(bill, 50);
console.log(bank.totalDeposits());
// bill withdraws 100
bank.withdraw(bill, 100);
console.log(bank.totalDeposits());
// joel withdraws 50;
bank.withdraw(joel, 50);
console.log(bank.totalDeposits());
// bill withdraws -50;
bank.withdraw(bill, -50);
console.log(bank.totalDeposits());
bank.transfer(joel, bill, 100);
console.log(bank.totalDeposits());
bank.transfer(joel, josh, 100);
console.log(bank.totalDeposits());
bank.transfer(joel, emilly, 100);
console.log(bank.totalDeposits());
bank.transfer(joel, joel, 100);
console.log(bank.totalDeposits());
