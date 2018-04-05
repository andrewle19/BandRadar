/*
Main.js should only be used to call modules that has specific functions
*/

//suppress console usage warning
/*eslint-disable no-console*/

(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;
  // Use App here to declare and instantiate prototypes to be used
  console.log('Printing contents of App: '+App);

  // add on click functions to buttons
  $('#aboutLanding').on('click',function(){
    window.location.assign('about.html');
  });

  $('#bandReq').on('click',function(){
    window.location.assign('bandForm.html');
  });
  $('#bandPage').on('click',function(){
    window.location.assign('bandPage.html');
  });


  // sends the user to the feedback form with band id
  $('#reviewbutton').on('click',function(){
    var bandid = window.location.search.substring(2);
    console.log(bandid);
    window.location.assign('feedbackform.html?='+bandid);

  });


})(window);
