(function() {
  'use strict';
  var COMMENT_SELECTOR = '[data-band-review="form"]';
  var SERVER_URL = 'http://localhost:2403//bandreviews';
  var App = window.App;

  var CommentFormHandler = App.CommentFormHandler;
  var BandInterface = App.BandInterface;
  var bandInterface = new BandInterface(SERVER_URL);
  console.log(bandInterface); // this is just to suppress unused bandInterface


  var handler = new CommentFormHandler(COMMENT_SELECTOR);
  handler.addSubmitHandler(function(data) {
    console.log('triggered submit');
    console.log('this is the data at main');
    console.log(data);

  });
})(window);
