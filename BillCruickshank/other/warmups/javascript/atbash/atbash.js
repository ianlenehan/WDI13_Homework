cipher = {
  encode: function (string) {
    return string
      .split('')
      .map(function (char){
        var num = char.charCodeAt(0);
        if( 97<=num && num <= 122 ) {
          return String.fromCharCode((97-num)+122); //takes lower case a to lower case z
        } else if (65 <= num && num <= 90) {
          return String.fromCharCode((65-num)+90); //take upper case A to upper case Z
        } else {
          return char;
        }
      })
      .join('');
  }
};

cipher.decode = cipher.encode;

console.log(cipher.encode("Hello"));
console.log(cipher.encode("test"));
console.log(cipher.decode("gvhg"));
