(function(window) {
  'use strict';
  var $ = window.jQuery;
  var FEEDBACK_SELECTOR = '[data-comments="form"]';
  var App = window.App || {};
  var BandList = App.bandList;
  var feedbackHandler = new BandList(FEEDBACK_SELECTOR);
  // Use App here to declare and instantiate prototypes to be used


  $('#feedback').on('click', function() {
    var bandid = window.location.search.substring(1);
    feedbackHandler.postcomment();
    window.location.assign('bandPage.html?='+bandid.substring(1));
  });

  $('#back').on('click',function(){
    var bandid = window.location.search.substring(1);
    window.location.assign('bandPage.html?='+bandid.substring(1));
  });



})(window);
