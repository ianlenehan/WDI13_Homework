console.log("test 123")
var bank = {
  bankAccounts: [
    {accName: "Carmen", netValue: 55},
    {accName: "Daniel", netValue: 20},
    {accName: "John", netValue: 150},
    {accName: "Lee", netValue: 80}
    ],

  sumOfBankNetValue: function (){
    var totalValue = 0;
    for(i=0; i < bank.bankAccounts.length ; i++ ){
      totalValue += bank.bankAccounts[i].netValue;
    }//end for
    console.log(totalValue);
  },//end function

  addNewAccount: function (){
    newAccName = prompt("Please fill in your name");
    newAccValue = prompt("How much money you would like to add to this account");
    bank.bankAccounts.push({accName: newAccName, netValue: newAccValue});
    console.log(bank.bankAccounts);

//second method to do this function:
/*    addNewAccount: function (){
      newAccount = {};
      newAccName = prompt("Please fill in your name");
      newAccValue = prompt("How much money you would like to add to this account");
      newAccount.accName= newAccName;
      newAccount.netValue= newAccValue;
      bank.bankAccounts.push(newAccount);
  } // end addNewAccount function
  */
  console.log(bank.bankAccounts);
},
  addMoney: function (){
    inputAccount = prompt("which account would you like to add money into?");
    inputMoney = parseInt(prompt("How much money would you like to add?"));
    for (i=0; i<bank.bankAccounts.length; i++){
      if (inputAccount === bank.bankAccounts[i].accName){
        console.log( "you have now" + (bank.bankAccounts[i].netValue += inputMoney) + "in your account");
      }
    }//end for
  }//end addMoney function
}//end bank

// bank.sumOfBankNetValue();
// bank.addNewAccount();
bank.addMoney();
