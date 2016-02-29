
var rectangle = {
    length: 50,
    width: 50
};

//function to figure out if shape is a square

var isSquare = function(length, width) {
    if (length === width) {
        console.log('This is a square');
    } else {
        console.log('this is not a square');
    }
}
isSquare(rectangle.length, rectangle.width);

//function to find total area

var area = function(length, width) {
    var squared = (length * width);
    console.log('The total area is ' + squared);
}
area(rectangle.length, rectangle.width);

//function to find perimeter

var perimeter = function(length, width) {
    var periperi = (length + width) * 2;
    console.log('The perimeter is ' + periperi);
}
perimeter(rectangle.length, rectangle.width);
