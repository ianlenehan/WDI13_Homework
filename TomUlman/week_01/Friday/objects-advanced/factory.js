var brosFactory = function (name, instrument, vice) {
// var bros = { replaced with below
    return {
      'name': name,
      'instrument': instrument,
      'vice': vice,
      'sing': function () {
        console.log('Everyone says I love you');
      }
    };

//   return bother; fixed as per above
};


var harpo = brosFactory('Harpo', 'harp', 'mutism');
/* ================= old way below =====================
var groucho = {
name: "Groucho",
instrument: 'guitar';
vice: 'cigars''

};
*/
