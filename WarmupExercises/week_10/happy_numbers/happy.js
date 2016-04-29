// Solution from the demo

var found = 0;

for(var i = 1; found < 10; i++) {
  if( happy(i) ) {
    found++;
    console.log('happy #' + found + ' = ' + i);
  }
}

function happy(num) {

  var cycle = [];
  var square_sum = num;

  while(true){
    square_sum = sum_of_digit_squares(square_sum);

    if(square_sum == 1){
      return true;
    }

    if(cycle[square_sum] === true) {
      return false;
    }

    cycle[square_sum] = true;
  }
}

function sum_of_digit_squares(num){

  var numstr = num.toString();
  var sum = 0;

  var i = numstr.length;
  while(i--){
    sum += +numstr[i] * +numstr[i];
  }

// Here's an official solution, using mathy modulus tricks to get the individual digits of a number, instead of treating the number as a string. However, it's a little harder to work out what this code is doing

// function happy(number) {
//     var m, digit ;
//     var cycle = [] ;

//     while(number != 1 && cycle[number] !== true) {
//         cycle[number] = true ;
//         m = 0 ;
//         while (number > 0) {
//             digit = number % 10 ;
//             m += digit * digit ;
//             number = (number  - digit) / 10 ;
//         }
//         number = m ;
//     }
//     return (number == 1) ;
// }

// var cnt = 8 ;
// var number = 1 ;

// while(cnt-- > 0) {
//     while(!happy(number))
//         number++ ;
//     document.write(number + " ") ;
//     number++ ;
// }
//   return sum;

// }
