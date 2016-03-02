/* The Temperature Converter

It's hot out! Let's make a converter.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."*/

/*var celsius = 25;
var fahrenheit = 72;
var fahrenheitConversion = (celsius * 1.8) + 32;
var celsiusConversion = (farenheit - 32)/ 1.8;

console.log(celsius + " °C is " + fahrenheitConversion + " °F");
console.log (fahrenheit + " °F is" + celsiusConversion + " °C");*/

var celsiusToFahrenheit = function(celsius){
  var fahrenheitConversion = (celsius * 1.8) + 32;
  //var celsiusConversion = (farenheit - 32)/ 1.8;
  console.log(celsius + " °C is " + fahrenheitConversion + " °F");
  //console.log (fahrenheit + " °F is" + celsiusConversion + " °C");
}
celsiusToFahrenheit(65);
