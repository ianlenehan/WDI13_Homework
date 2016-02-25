console.log("###############################Bank#####################################");
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//

var bank = {
      accounts:[
                  {
                      name: "test1",
                      balance:5000
                  },
                  {
                      name: "test2",
                      balance:5000
                  }
      ],
      addAccount: function(Name, Balance){
                  this.accounts.push({name:Name, balance:Balance});
                },
      getTotalMoney:function(){
                      var totalBalance =0;
                      for (var i = 0; i < this.accounts.length; i++) {
                        totalBalance += this.accounts[i].balance;
                      }
                      return totalBalance;
                  },
      withdraw:function(Name,Ammount){
                    for (var i = 0; i < this.accounts.length; i++) {
                      if(this.accounts[i].name === Name){
                        if(this.accounts[i].balance >= Ammount){  //ensures withdraw is never more than balance
                          this.accounts[i].balance = this.accounts[i].balance - Ammount;
                        }
                        else{
                          console.log("Cannot Withdraw More than Balance");
                        }
                      }
                    }
                  },
      deposit:function(Name, Ammount){
                    for (var i = 0; i < this.accounts.length; i++) {
                      if(this.accounts[i].name === Name){
                          this.accounts[i].balance = this.accounts[i].balance + Ammount;
                      }
                    }
                  },

      transfer: function(withdrawFrom, depositTo, ammount){
            this.withdraw(withdrawFrom,ammount);
            this.deposit(depositTo,ammount);
      }


    };

    bank.addAccount("test3",2000);
    console.log("Total money in the bank is $"+bank.getTotalMoney());
    console.log("someone withdraws $1000");
    bank.withdraw("test2",1000);
    console.log("Now the total money in the bank is $"+bank.getTotalMoney());
    console.log("Someone deposits $2000");
    bank.deposit("test2",2000);
    console.log("Now the total money in the bank is $"+bank.getTotalMoney());
    console.log("A new account added with $2000 balance");
    bank.addAccount("test1",2000);
    console.log("Now the total money in the bank is $"+bank.getTotalMoney());
    bank.transfer("test2","test3",500);
    console.log("Trying to withdraw more than balance");
    bank.withdraw("test3",10000);

    console.log("###############################End#####################################");
