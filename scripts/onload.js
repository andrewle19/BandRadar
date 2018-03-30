/*eslint-disable no-console*/
(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  //constructor
  function Refresher(url) {
    if (!url) {
      throw new Error('no url passed.');
    }
    this.serverUrl = url;
  }

  Refresher.prototype.reload = function() {


    $.get(this.serverUrl, function(serverResponse) {
      // console.log('Printing serverResponse obj.');
      console.log('Populating comment section: ');

      var COMMENT_SELECTOR = '[data-band-comment="box"]';
      var CommentBox = App.CommentBox;
      var comment = new CommentBox(COMMENT_SELECTOR);

      for (var i = 0; i < serverResponse.length; i++) {

        var bandInfo = {
          'bandname': serverResponse[i]['bandname'],
          'username': serverResponse[i]['username'],
          'review': serverResponse[i]['review'],
          'rating': serverResponse[i]['rating']
        };
        comment.addComment.call(comment, bandInfo);
        console.log('reload - after addComment call');
      }
    });
  };


  App.Refresher = Refresher;
  window.App = App;

})(window);
