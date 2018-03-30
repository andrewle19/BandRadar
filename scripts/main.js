/*
Main.js should only be used to call modules that has specific functions
*/

//suppress console usage warning
/*eslint-disable no-console*/

(function(window) {
  "use strict";
  //create an App instance to be used

  var App = window.App || {};
  
  // Use App here to declare and instantiate prototypes to be used
  console.log("Printing contents of App: "+App);

  document.getElementById("bandLanding").onclick = function directToBandPage() {
    window.location.href = "bandFeedback.html";
  };

  document.getElementById("aboutLanding").onclick = function directToAbout() {
    window.location.href = "about.html";
  };

  document.getElementById("florenceFeed").onclick = function florenceFeed() {
    window.location.href = "FlorenceFeedSite.html";
  };

  document.getElementById("TDCCFeed").onclick = function twoDoorFeed() {
    window.location.href = "twoDoorCinema.html";
  };

  document.getElementById("WTMFeed").onclick = function walkTheMoon() {
    window.location.href = "walkTheMoon.html";
  };

  document.getElementById("deathCabFeed").onclick = function deathCabFeed() {
    window.location.href = "deathCabForCutie.html";
  };

})(window);
