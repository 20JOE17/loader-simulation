/* jshint browserify: true */

var simulateProgress = require('simulate-progress');
var loaderElement = document.querySelector(".progress");
var progressElement = document.querySelector(".loader");

  function progressCallback(percent){
    loaderElement.style.width = percent;
  }

  function finishCallback(){
    progressElement.add("finished");
  }

  function startSimulation(){
    loaderElement.remove("finished");
    simulateProgress(progressCallback, finishCallback);
  }

