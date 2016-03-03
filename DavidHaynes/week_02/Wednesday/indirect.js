var passwordInput = document.getElementById('password');
var passwordFinal = document.getElementById('password').value;
var passwordHold = [];

var hideLetter = function () {
      passwordHold.push(password[passwordHold.length]);
      password.pop();
      password.push('*');
};

password.addEventListener(keyup, hideLetter);
