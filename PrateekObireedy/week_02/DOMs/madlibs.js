var madLibs= function(){
  var noun=document.getElementById("noun").value;
  var adj=document.getElementById("adjective").value;
  var per=document.getElementById("person").value;

  var story = noun + " likes to " + adj + " with " + per + ".";

document.getElementById("story").innerHTML =story;

};

document.getElementById("lib-button").addEventListener("click", madLibs);
