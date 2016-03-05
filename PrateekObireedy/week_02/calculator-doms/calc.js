var square=function(){
  var sq=document.getElementById("square-input").value;
  var s=sq*sq;
  document.getElementById('solution').innerHTML = s;

};
document.getElementById('square-button').addEventListener("click", square);


var half = function(){
  var hlf=document.getElementById("half-input").value;
  var h =hlf/2;
  document.getElementById('solution').innerHTML = h;
  };

document.getElementById('half-button').addEventListener("click", half);

var percentage=function(){
 var num1=document.getElementById("percent1-input").value;
  var num2=document.getElementById("percent2-input").value;
  var calc=(num1*num2/100);
  document.getElementById('solution').innerHTML=calc;
};

document.getElementById("percent-button").addEventListener("click", percentage);

var ar=function(){
  var radius=document.getElementById("area-input").value;
  var radiussq= radius*radius;
  var pie= 3.14;
  var area=pie*radius;
  document.getElementById('solution').innerHTML = area;
};

document.getElementById("area-button").addEventListener("click", ar);
