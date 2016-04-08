console.log(_);

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];
// Exercises
//
// Iterate through numbers and log each number to the console
// Iterate through numbers and multiply each one of them by 5
// Iterate through numbers and reduce it by adding them together
// Get an array of all of the people in people that have the username "E"
// Find the first object in people that has the id of 3
// Find the first person who has an age of less than 50
// Get an array of all of the people with an age of over 60
// Remove all of the people with an age less than 40

_.each(numbers, function (num) { console.log(num); });
_.each(numbers, function (num) { console.log(num*5); });
console.log( _.reduce(numbers, function (sum, num) {
   return sum + num;
 }, 0) );

console.log(_.select(people, {username: "E"}));

console.log(_.find(people, {id: 3}));

console.log(_.find(people, function (person) {
  return person.age< 50;
}));

console.log(_.select(people, function (person) {
  return person.age > 60;
}));

console.log(_.reject(people, function (person) {
  return person.age < 40;
}));

/////////////////////////////////////////////////////////////////////////////////

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
]; // Random words from here... http://www.catb.org/jargon/html/go01.html


// Exercises
//
// Sort the people by 'uid'
// Group the random words by the lower case version of their first letter
// Check to see if all the words have more than 3 characters
// Check if some words are over twenty characters long
// Get an array of all of the uids in people
// Find the person with the highest uid
// Return an object that says how many even numbers and how many odd numbers there are in numbers
// Get three random numbers out of numbers

console.log(_.sortBy(people, "uid"));
console.log(_.groupBy(words, function (word) {
  return word[0].toLowerCase();
}));
console.log(_.all(words, function (word) {
  return word.length > 3;
}));
console.log(_.any(words, function (word) {
  return word.length > 20;
}));
console.log(_.pluck(people, "uid"));
console.log(_.max(people, "age"));
console.log(_.countBy(numbers, function (num) {
  return (num%2 === 0) ? "even" : "odd";
}));
console.log(_.sample(numbers, 3));

/////////////////////////////////////////////////////////////////////////////////

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// Create an array of every five numbers between 30 and 101
// Turn bumpyArr into one flat array (no nested arrays)
// Remove all of the falsey elements in the uncompactedArr
// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
// Find the index of the first element in numbers that is over 7 and is even
// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
console.log(_.range(30, 101, 5));
console.log(_.flatten(bumpyArr));
console.log(_.compact(uncompactedArr));
console.log(_.union([ 1, 25, 100 ], [ 1, 14, 25 ], [24, Infinity, -0]));
console.log(_.findIndex(numbers, function(num){
  return ((num > 7) && (num % 2 === 0 ));
}));
console.log(_.object(arrToTransform[0], arrToTransform[1]));

/////////////////////////////////////////////////////////////////////////////////

var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};

// Multiply each value in objectToMap by a random number and return an object with the changed values
// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
// Remove the "start" key from objectToMap in two different ways

console.log(_.map(objectToMap, function (value) {
  return value * Math.random();
}));
console.log(_.pairs(objectToMap));
console.log(_.invert(objectToMap));
console.log(_.omit(objectToMap, "start"));
console.log(_.pick(objectToMap, "middle", "end"));

/////////////////////////////////////////////////////////////////////////////////

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];

var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];
// Log out 30 random numbers between 20 and 100
// Create a function that can only ever be called once
// Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>

_.times(30, function() { console.log( _.random(20, 100) );} );

var oneTime = function () {
  console.log("Only look at the fuzz one time.");
};
var yeahOneTime = _.once(oneTime);

/////////////////////////////////////////////////////////////////////////////////

var capitaliseFirst = function (input) {
  if (_.isString(input)) {
    input = input[0].toUpperCase() + input.slice(1);
  }
  return input;
};

var brothers = _.map(startingData, function (row) {
  return _.mapObject(_.invert(_.object.apply(null, row)), capitaliseFirst);
});

var brothersTemplate = _.template(
  "<p><%= firstName + ' ' + lastName %> was born in <%= born %>.</p>"
);

window.onload = function () {

  var template = _.template("<p> Hello <%= name %>, you don't look a day over 20 </p>");

  _.map(people, function (person) {
    document.body.innerHTML += template({name: person.username});
  });

  _.map(brothers, function (brother) {
    document.body.innerHTML += brothersTemplate(brother);
  });
};
