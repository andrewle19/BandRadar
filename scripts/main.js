/*
Main.js should only be used to call modules that has specific functions
*/

//suppress console usage warning
/*eslint-disable no-console*/

(function(window) {
  'use strict';
var App = window.App || {};
  // Use App here to declare and instantiate prototypes to be used
  console.log('Printing contents of App: '+App);


    document.getElementById('aboutLanding').onclick = function directToAbout() {
      window.location.href = 'about.html';
    };

  document.getElementById('bandLanding').onclick = function directToBandPage() {
    window.location.href = 'feedbackform.html';
  };

  document.getElementById('bandReq').onclick = function directToBandReq() {
  window.location.href = 'bandForm.html';
};

document.getElementById('bandPage').onclick = function bandFeed() {
  window.location.href = 'bandPage.html';
};


})(window);
