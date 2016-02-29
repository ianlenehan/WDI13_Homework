var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
undefined
for (var i = 0; i < letters.length; i++) {
  console.log( letters[i] );
}
a
b
c
d
e
f
g
h
i

undefined
for (var i = 1; i < 7; i++) {
  console.log( letters[i] );
}
b
c
d
e
f
g
undefined
letters.indexOf("b");
1
letters.indexOf("g");
6
for (var i = letters.indexOf("b"); i < letters.indexOf("g"); i++) {
  console.log( letters[i] );
}
b
c
d
e
f

undefined
nLine.indexOf("Union Square")
4
nLine.indexOf("8th")
5
