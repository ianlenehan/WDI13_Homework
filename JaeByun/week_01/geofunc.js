// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: '4',
  width: '4'
};

var isSquare = function (rectangle){
  for (var i = 0; i < rectangle.length; i++) {
    if (rectangle.length === rectangle.width){
      console.log('This rectangle is a square');
    } else {
    console.log('This is a rectangle, but not a square')
}
}
};
isSquare(4, 5)

var area = function (rectangle){
  rectangle.area = (rectangle.length * rectangle.width);
  return answer;
};

var perimeter = function (rectangle){
  rectangle.perimeter = (rectangle.length * 2 + rectangle.width * 2)
  return answer;
};


// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function (triangle){
  for (var i = 0; i < triangle.length; i++) {
  }
    if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC){
      console.log('This is an equilateral triangle');
    } else if ((triangle.sideA !== triangle.sideB && triangle.sideB === triangle.sideC) || (triangle.sideA === triangle.sideB
      && triangle.sideA !== triangle.sideC) || (triangle.sideA === triangle.sideC && triangle.sideC !== triangle.sideB)){
      console.log('This is an isosceles triangle');
    } else {
      console.log('This triangle is neither isosceles or equilateral');
    }
};

var area = function (triangle){
  var s = (triangle.sideA + triangle.sideB + triangle.sideC);
  return Math.sqrt(s * triangle.sideA * triangle.sideB * triangle.sideC);
};

var isObtuse = function (triangle){
  for (var i = 0; i < triangle.length; i++) {
    if ((math.pow(triangle.sideA, 2)) > (math.pow(triangle.sideB, 2)) + (math.pow(triangle.sideC, 2)) ||
    (math.pow(triangle.sideB, 2)) > (math.pow(triangle.sideA, 2)) + (math.pow(triangle.sideC, 2)) ||
    (math.pow(triangle.sideC, 2)) > (math.pow(triangle.sideA, 2)) + (math.pow(triangle.sideB, 2))){
      console.log('This is an obtuse angled triangle');
    } else {
      console.log('This is not an obtuse angled triangle');
    }
  }
};

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following
// capabilities that you need to write.
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the
// total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank
// and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts,
//  etc. The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to
// change the balance. There is no need to write a user interface. Make sure functions return values -- you may
// also have your functions console.log() values to help you see your code working. You should write a basic story
// through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts,
// show the total balance, make some deposits and withdrawals, show the new total balance.

var accounts = [
{ name: 'Jack' + ' ' +'Daniels',
  bankBalance: 100000
},
{ name: 'John' + ' ' + 'Smith',
  bankBalance: 9999
},
{ name: 'Lisa' + ' ' + 'Chan',
  bankBalance: 100
}];

var sumOfAccounts = function (accounts){
var amount = 0;
  for (var i = 0; i <= accounts.length-1; i++) {
    amount += accounts[i].bankBalance;
    console.log(amount);
  }
};

var addAccounts = function(name, balance){
  accounts.push({name: name, bankBalance: balance});
};

var withdraw = function (name, amount){
  var amount = 1;
  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].name === name);
    amount -= accounts[i].bankBalance;
    console.log('This account has' + amount + ' remaining')
  }
};

var deposit = function (name, amount){
  var amount = 0;
  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].name === name);
    amount += accounts[i].bankBalance;
    console.log('This account has' + amount + ' remaining')
  }
};

/*
Having trouble with the remainingbalance >= 0 and the transfer from one account to another.
*/

var remainingBalance = function (name, amount){
  if (bankBalance >= 0);
  return message; "You have" + bankBalance + " remaining."
  console.log(message)
  if (bankBalance < 0); {
  return message; "You have insufficient funds";
  console.log(message)
}
};

var transfer = function (name, name2, amount){
  if (amount >= 0);
  withdraw(name, amount);
  deposit(name2, amount);
  if (amount < 0);
  return message; "Insufficient funds. Cannot proceed with transfer."
  console.log(message);
};
