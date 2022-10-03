(function (window) {
var helloSpeaker ={};
helloSpeaker.name = ["Yaakov",  "Paul", "Frank", "Larry", "Paula", "Laura"];
var speakWord = "Hello";
helloSpeaker.speak=function(){
  console.log(speakWord + " " + helloSpeaker.name);
}

window.helloSpeaker=helloSpeaker
})(window);

