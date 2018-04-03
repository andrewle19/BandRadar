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

  $('#aboutLanding').on('click',function(){
    window.location.assign('about.html');
  });
  
  $('#bandReq').on('click',function(){
    window.location.assign('bandForm.html');
  });
  $('#bandPage').on('click',function(){
    window.location.assign('bandPage.html');
  });
//
//     document.getElementById('aboutLanding').onclick = function directToAbout() {
//       window.location.href = 'about.html';
//     };
//
//   document.getElementById('bandLanding').onclick = function directToBandPage() {
//     window.location.href = 'feedbackform.html';
//   };
//
//   document.getElementById('bandReq').onclick = function directToBandReq() {
//   window.location.href = 'bandForm.html';
// };
//
// document.getElementById('bandPage').onclick = function bandFeed() {
//   window.location.href = 'bandPage.html';
// };

  $('#reviewbutton').on('click',function(){
    var bandid = window.location.search.substring(2);
    console.log(bandid);
    window.location.assign('feedbackform.html?='+bandid);

  });


})(window);
