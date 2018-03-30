(function() {
  'use strict';
  var COMMENT_SELECTOR = '[data-band-review="form"]';
  var SERVER_URL = 'http://localhost:2403/bandreviews';
  var App = window.App;
  var CommentProcessor = App.CommentProcessor;
  var CommentFormHandler = App.CommentFormHandler;
  var BandInterface = App.BandInterface;

  var bandInterface = new BandInterface(SERVER_URL);
  var proc = new CommentProcessor('br-1', bandInterface);
  window.proc = proc;



  var handler = new CommentFormHandler(COMMENT_SELECTOR);
  handler.addSubmitHandler(function(data) {
    console.log('triggered submit');
    console.log('this is the data at main');
    console.log(data);
    proc.procComment.call(proc, data);
  });
})(window);
