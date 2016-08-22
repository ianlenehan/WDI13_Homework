// Robot Simulator
// Badger Robotics manufactures robots that have three possible movements:
//
// turn right
// turn left
// advance
// The robot factory's test facility (aka "your browser's console")
// has a simulator which can take a string of letters and feed this into a robot as instructions.
//
// Requirements (DO THIS IN JAVASCRIPT)
//
// Draw a grid on the page - like a chess board - 8 x 8
// Have a function to change the fake robots orientation - north, south, east, west
// Have a function to advance one step
// Don't worry about testing, just make it look decent.
// You can use jQuery and what ever other libraries you want
// robot = new Robot({ name: "Wolf" });
//
// robot.turn( "right" );
// robot.turn( "left" );
// robot.advance();
// Extra Credit
//
// Control the robot with your keyboard (left, right, forward)
// Error handling - don't let it go off the board
// Animations
// Advance a few steps at a time
// Pass in a series of instructions
// Bring the pretty

var robot;
var board;

robotControls = {

    new: function(name) {
        robot = {
                name: name,
                row: 0,
                column: 0,
                angle: 2
        };
        this.place(robot);
    },

    place: function(robot) {
        $('.robot').remove();
        var $robotImg = $('<img src="Robot-icon.png"></img>');
        $robotImg.addClass('robot');
        $('#cell' + robot.row + robot.column).append($robotImg);
        switch (robot.angle) {
            case 1:
                $('.robot').addClass('north');
                break;
            case 2:
                $('.robot').addClass('east');
                break;
            case 3:
                $('.robot').addClass('south');
                break;
            case 4:
                $('.robot').addClass('west');
                break;
        }

    },

    left: function(robot) {
        if (robot.angle === 1) {
            robot.angle = 4;
        } else {
            robot.angle -= 1;
        }
        this.place(robot);
    },

    right: function(robot) {
        if (robot.angle === 4) {
            robot.angle = 1;
        } else {
            robot.angle += 1;
        }
        this.place(robot);
    },

    forward: function(robot) {
        if (robot.angle === 1) {
            if(robot.row === 0) {
                robot.row = board.row -1;
                this.place(robot);
                return;
            }
            robot.row -= 1;
        } else if (robot.angle === 2) {
            if(robot.column === (board.column - 1)) {
                robot.column = 0;
                this.place(robot);
                return;
            }
            robot.column += 1;
        } else if (robot.angle === 3) {
            if(robot.row === (board.row - 1)) {
                robot.row = 0;
                this.place(robot);
                return;
            }
            robot.row += 1;
        } else if (robot.angle === 4) {
            if(robot.column === 0) {
                robot.column = board.column - 1;
                this.place(robot);
                return;
            }
            robot.column -= 1;
        }
        this.place(robot);
    },

    reset: function(){
        $('.robot').remove();
    }


};

var board = {

    make: function(row, column) {
        board = {row: row, column: column};
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < column; j++) {
                  var $cell = $('<div class="cell"></div>');
                  $cell.addClass('row' + i).addClass('column' + j).attr('id','cell' + i + j );
                  $('#main').append($cell);
            }
            $('#main').append('<br>');
        }

    },

    reset: function() {


    }

};

$(function() {
    board.make(8,8);
    robotControls.new('Wolf');
    $('body').keydown(function(e){
        if(e.keyCode == 37){
            console.log('left');
            robotControls.left(robot);
        }
        if(e.keyCode == 39){
            console.log('right');
            robotControls.right(robot);
        }
        if(e.keyCode == 38){
            console.log('forward');
            robotControls.forward(robot);
        }
    });

});
