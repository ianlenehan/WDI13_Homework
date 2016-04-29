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

  return sum;

}
