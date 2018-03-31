(function() {
  'use strict';
  var REVIEW_SELECTOR = '[data-band-review="form"]';
  var COMMENT_SELECTOR = '[data-band-comment="box"]';
  var SERVER_URL = 'http://localhost:2403/bandreviews';
  var App = window.App;
  var CommentProcessor = App.CommentProcessor;
  var BandInterface = App.BandInterface;
  var CommentFormHandler = App.CommentFormHandler;
  var CommentBox = App.CommentBox;
  var Refresher = App.Refresher;

  var bandInterface = new BandInterface(SERVER_URL);
  var proc = new CommentProcessor('br-1', bandInterface);


  var handler = new CommentFormHandler(REVIEW_SELECTOR);

  var commenter = new CommentBox(COMMENT_SELECTOR);
  var reloadComments = new Refresher(SERVER_URL);
  reloadComments.reload();

  handler.addSubmitHandler(function(data) {
    console.log(data);
    proc.procComment.call(proc, data);
    commenter.addComment.call(commenter, data);
  });

  window.proc = proc;
})(window);
