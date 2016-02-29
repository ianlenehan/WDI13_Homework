

//--------------------------- WELCOME TO THE JAVASCRIPT BANK -----------------------//

var bank = {
  accounts: [],
  sumAccounts: function() {
    var runningTotal = 0;
    for (var i = 0; i < bank.accounts.length; i++) {
      runningTotal += bank.accounts[i].currentBalance;
    };
    return runningTotal;
  },
  addAccount: function(name, balance) {
    newAccount = {
      accountName: name,
      currentBalance: balance,
      deposit: function(amount) {
        this.currentBalance += amount;
        console.log("Successful deposit of $" + amount + " to " + this.accountName + "'s account. Account balance is: $" + this.currentBalance);
        return true;
      },
      withdraw: function(amount) {
        if (this.currentBalance >= amount) { // Ensure currentBalance is greater than withdrawl amount.
          this.currentBalance -= amount;
          console.log("Successful withdraw of $" + amount + " from " + this.accountName + "'s account. Account balance is $" + this.currentBalance);
          return true;
        } else {
          console.log("Withdraw failed, insufficient funds."); // Transfer is rejected if funds not available.
          return false;
        }
      }
    }
  bank.accounts.push(newAccount);
  console.log("Added a new account for " + name + ". Opening balance: $" + balance + "." );
  },
  transfer: function(fromAccount, toAccount, amount) {
    console.log("Attempting transfer of $" + amount + " from " + fromAccount + " to " + toAccount + ".");
    if (this.findAccount(fromAccount).withdraw(amount)) { // Check withdrawl is successfully completed before issuing deposit.
      this.findAccount(toAccount).deposit(amount); // Deposits withdrawn funds
      console.log("Successfully transferred $" + amount + " from " + fromAccount + " to " + toAccount + "." )
      return true;
    } else {
      console.log("Transfer Failed.");
      return false;
    }
  },
  findAccount: function(name) {
    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].accountName === name) {
        return bank.accounts[i];
      };
    };
  },
}

//-------------------  The Story of how Harry got all the money. ----------------------//

console.log("Harry, Brylney and Josh decide to join the bank...");
bank.addAccount("Harry", 1000);
bank.addAccount("Brynley", 500);
bank.addAccount("Josh", 700);
console.log("The bank now has a total of $" + bank.sumAccounts() + " deposited in its accounts.");
console.log("Josh get's paid! He decides to put some of his money in the bank...");
bank.findAccount("Josh").deposit(300);
console.log("Brynley has bills to pay, he decides to withdraw $300");
bank.findAccount("Brynley").withdraw(300);
console.log("Harry reminds Brynley and Josh that they both owe him money...");
console.log("Josh pay's back what he owes...");
bank.transfer("Josh", "Harry", 700);
console.log("Brynley tries to pay back Harry, but forgets that he just withdrew some money to pay his bills...");
bank.transfer("Brynley", "Harry", 300);
console.log("Harry, being the understanding guy that he is, tells Brynley to just pay back what he can at the moment.");
console.log("Brynley transfers the $200 remaining in his account to Harry.");
bank.transfer("Brynley", "Harry", 200);
console.log("The bank still has a total of: $" + bank.sumAccounts() + " currently in it's accounts, but now it's all Harry's :)");
