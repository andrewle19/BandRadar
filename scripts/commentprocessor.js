/*
This function will act as truck, which process
band reviews and use bandinterface to upload to
deployD bandreviews collections.
*/

(function() {
  'use strict';
  var App = window.App || {};

  function CommentProcessor(pid, db) {
    this.pid = pid;
    this.db = db;
  }
  // Send comment to the interface
  CommentProcessor.prototype.procComment = function(data) {
    console.log('Adding comment for '+ data.username);
    // console.log('With review: '+ data.review);
    this.db.add(data.bandname,data);

  };
  App.CommentProcessor = CommentProcessor;
  window.App = App;
})(window);
