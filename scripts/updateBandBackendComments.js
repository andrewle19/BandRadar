(function(window) {
  'use strict';
var $ = window.jQuery;
var FEEDBACK_SELECTOR = '[data-comments="form"]';
var App = window.App || {};
var BandList = App.bandList;
var feedbackHandler = new BandList(FEEDBACK_SELECTOR);
  // Use App here to declare and instantiate prototypes to be used


  $('#feedback').on('click', function() {
    feedbackHandler.postcomment();
  });

  $('#goBack').on('click', function() {
    window.history.back();
  });



})(window);
