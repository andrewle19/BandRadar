(function(window) {
  'use strict';
  var $ = window.jQuery;
  var BANDLIST_SELECTOR = '[data-bandreview="form"]';
  var App = window.App || {};
  var BandList = App.bandList;
  var bandlistHandler = new BandList(BANDLIST_SELECTOR);
  // Use App here to declare and instantiate prototypes to be used

  $('#bandformButton').on('click', function() {
    bandlistHandler.postdata();
    window.location.assign('index.html');
  });

  $('#back').on('click', function() {
    window.location.assign('index.html');
  });


})(window);
