(function(window) {
  'use strict';
var $ = window.jQuery;
var BANDLIST_SELECTOR = '[data-coffee-order="form"]';
var App = window.App || {};
var BandList = App.bandList;
var bandlistHandler = new BandList(BANDLIST_SELECTOR);
  // Use App here to declare and instantiate prototypes to be used

  $('#bandform1').on('click', function() {
    bandlistHandler.postdata();
});

})(window);
