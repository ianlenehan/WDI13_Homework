// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
//
// Examples
//
// "cabbage" should be scored as worth 14 points:
//
// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E
// And to total:
//
// 3 + 2*1 + 2*3 + 2 + 1
// = 3 + 2 + 6 + 3
// = 5 + 9
// = 14

var letters = [
  {value: 1, letters: ['a','e','i','o','u','l','n','r','s','t']},
  {value: 2, letters: ['d','g']},
  {value: 3, letters: ['b','c','m','p']},
  {value: 4, letters: ['f','h','v','w','y']},
  {value: 5, letters: ['k']},
  {value: 8, letters: ['j','x']},
  {value: 10, letters: ['q','z']}
]

var calculate = {
  total: 0,
  getValue: function (word) {
    for (var h = 0; h<word.length; h++) {
      for (var i = 0; i<letters.length; i++) {
        for (var j = 0; j<letters[i].letters.length; j++) {
          if (word[h] === letters[i].letters[j]) {
            calculate.total += letters[i].value;
          }
        }
      }
    }
    console.log(calculate.total);
    calculate.total = 0;
  }
}
