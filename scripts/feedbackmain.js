(function() {
  'use strict';
  var COMMENT_SELECTOR = '[data-band-review="form"]';
  var SERVER_URL = 'http://localhost:2403/bandreviews';
  var App = window.App;
  var CommentProcessor = App.CommentProcessor;
  var CommentFormHandler = App.CommentFormHandler;
  var BandInterface = App.BandInterface;
  var Refresher = App.Refresher;

  var bandInterface = new BandInterface(SERVER_URL);
  var proc = new CommentProcessor('br-1', bandInterface);


  var handler = new CommentFormHandler(COMMENT_SELECTOR);
  var reloadComments = new Refresher(SERVER_URL);
  reloadComments.reload();

  handler.addSubmitHandler(function(data) {
    console.log(data);
    proc.procComment.call(proc, data);
  });
  window.proc = proc;
})(window);
