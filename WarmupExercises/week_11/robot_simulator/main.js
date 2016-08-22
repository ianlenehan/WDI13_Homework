// I did this a little differently to how the brief might have foreshadowed, since I wanted to be able to control the robot with my keyboard (not the console) and change its direction (rather than its position) with the left and right arrows.

// Make the robot variable global so we can access it outside the scope of the document.ready function.
var robot;

$(document).ready(function() {

    // The Robot.turn() function uses the index of the current direction to determine the next direction when L/R keys pressed.
    var directions = ["up", "right", "down", "left"];


    // Function to create a 9x9 board comprised of a table, rows and cells.
    var createBoard = function() {
        var $board = $('<table></table>');
        $('body').append($board);
        for (var i = 0; i < 9; i++) {
            var $row = $('<tr></tr>');
            $('table').append($row);
            for (var j = 0; j < 9; j++) {
                var $square = $('<td></td>');
                $row.append($square);
            }
        }
    };

    // Create a Robot constructor.
    var Robot = function() {
        // Initial robot direction and x/y position values
        var x = 0;
        var y = 0;
        var dir = "up";

        // Create an element for our robot...
        var $bot = $('<div></div>');
        // ... give it a class of 'up' so its style reflects its initial direction, and...
        $bot.addClass('robot up');
        // ... append it to the body.
        $('body').append($bot);

        // When moveRobot is called, set it's position using the x and y values (the code below is a bit convoluted, but - on the y axis for example, take the height of the and divide it by two to get the centerline, add 40*y (which we increment whenever the robot moves on the y axis) and subtract 20 to vertically center the robot relative to the board cell it sits on)
        var moveRobot = function() {
            $bot.css("top", (window.innerHeight / 2 + y * 40 - 20) + 'px');
            $bot.css("left", (window.innerWidth / 2 + x * 40 - 20) + 'px');
        };

        // Call the moveRobot() function when a robot object is created to position it on the board.
        moveRobot();

        // Recalculate robot position if window resized.
        $(window).resize(function() {
            $bot.css("top", (window.innerHeight / 2 + y * 40 - 20) + 'px');
            $bot.css("left", (window.innerWidth / 2 + x * 40 - 20) + 'px');
        });

        // Function to turn the robot
        var turn = function(direction) {
            // Remove the current 'direction' css class.
            $('.robot').removeClass('up down left right');
            // If the direction passed into turn() is left, pick the previous element in the directions array, unless there is no previous element, in which case pick the last element.
            if (direction === "left") {
                if (directions.indexOf(dir) > 0) {
                    dir = directions[directions.indexOf(dir) - 1];
                } else {
                    dir = directions[3];
                }
            } else {
                // ie, 'if direction === "right"', do the reverse
                if (directions.indexOf(dir) < 3) {
                    dir = directions[directions.indexOf(dir) + 1];
                } else {
                    dir = directions[0];
                }
            }
            // Give the robot the class matching its new direction so we know which way its facing.
            $('.robot').addClass(dir);
        };

        // When controlling the robot with the keyboard, the step arg will always be 1.
        var advance = function(step) {
            step = step || 1;
            // the robot's direction will determine whether the x or y value needs to be incremented or decremented (to move it down/up, left/right)
            if (dir === "up") {
                y = y - step;
            } else if (dir === "down") {
                y = y + step;
            } else if (dir === "left") {
                x = x - step;
            } else if (dir === "right") {
                x = x + step;
            }
            // Call moveRobot() to update the robot's position.
            moveRobot();
        };

        // When we create a new robot, return an object with keys we can use to access functions within the Robot constructor.
        return {
            advance: advance,
            left: function() {
                turn("left");
            },
            right: function() {
                turn("right");
            },
        };
    };
    createBoard();
    robot = new Robot();
});

$(document).keyup(function(e) {
    if (e.keyCode == 38) {
        robot.advance(1);
    } else if (e.keyCode == 37) {
        robot.left();
    } else if (e.keyCode == 40) {
        robot.advance(-1);
    } else if (e.keyCode == 39) {
        robot.right();
    }
});
