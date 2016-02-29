// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward
//  the user if they found a letter (multiplying the reward if multiple
//     letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.



var uberArray = [["f","o","x","x"],   //answer word
                ['_','_','_','_'],    //correct guesses
                [],                   //incorrect guesses
                [0],                  //total prize amount
                [0]];                 //result of spinTheWheel

var guessLetter = function() {
  letter = prompt("What letter do you want to guess?");

  if (uberArray[1].indexOf(letter) >= 0 ||
                uberArray[2].indexOf(letter) >= 0) {
    console.log("You've already picked that letter; you lose $5");
    uberArray[3][0] -= 5;
    return uberArray;
  }
  for (i=0; i<uberArray[0].length; i++) {
    if (letter === uberArray[0][i]) {
      console.log("That was a correct guess!");
      var reward = uberArray[4][0];
      console.log("You have won " + reward);
      uberArray[1][i] = letter;
      uberArray[3][0] += reward;

    } else if (uberArray[0].indexOf(letter) === -1) {
      uberArray[2].push(letter);
      console.log("That was an incorrect guess. You lose $1");
      uberArray[3][0] -= 1;
      return uberArray;
    }
  }
  return uberArray;
}

function status() {
  console.log("Your correct guesses are", uberArray[1]);
  console.log("Your incorrect guesses are", uberArray[2]);
  console.log("Your current prize money is $", uberArray[3]);
}

var isFinished = function(a, b) {
  if (a === b) return true;
  if (a ==  null || b == null) return false;
  if (a.length != b.length) return false;

  for (i=0; i<a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  alert("The game has finished!");
  console.log("The game has finished. The word was \"" +
                uberArray[0].join('') + "\"");
  if (uberArray[3][0] > 0) {
    console.log("Your total prize money was $" + uberArray[3][0] + "!!");
    console.log("Unfortunately you didn't win the car :/");
  } else {
    console.log("YOU'VE BEEN BAMBOOZLED!!");
  }
  console.log("We'll see you at the same time tomorrow for Wheel of Hangman!");
  return true;
}

function spinTheWheel() {
  var prize = Math.ceil(Math.random() * 10);
  uberArray[4][0] = prize;
  alert("This round you are playing for $" + prize);
  return uberArray;
}


function playToDone() {
  console.log("Let's play Bamboozle!");
  status();
  console.log("");
  console.log("");

  do {
    var uberArray = spinTheWheel()
    var uberArray = guessLetter();
    if (uberArray[3][0] <= 0) {
      uberArray[3][0] = 0;
    }
    status();
    var finished = isFinished(uberArray[0],uberArray[1]);
  } while (finished === false);
}
