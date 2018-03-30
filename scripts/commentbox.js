(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  //constructor
  function CommentBox(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  CommentBox.prototype.addComment = function(bandInfo) {
    console.log('adding comment to DOM ');

    var newCommentElement = new Comment(bandInfo);

    this.$element.append(newCommentElement.$element);
    console.log('added comment box');
  };

  //constructor
  function Comment(bandInfo) {
    console.log(bandInfo);
    console.log(' in Comment subtree creation');
    // Creating elements for the DOM subtree
    var $outerDiv = $('<div></div>', {
      'data-band-comment': 'comment',
      'class': 'text'
    });

    var $innerLabelDiv = $('<div></div>');

    var $userLabel = $('<label>'+bandInfo.username+'</label>');
    var $rateLabel = $('<label>Rating: ' + bandInfo.rating + '</label>');


    var $textArea = $('<textarea rows="5" cols="80" disabled>'+bandInfo.review+'</textarea>');

    $innerLabelDiv.append($userLabel);
    $innerLabelDiv.append('<br>')
    $innerLabelDiv.append($rateLabel);

    $outerDiv.append($innerLabelDiv);
    $outerDiv.append($textArea);

    this.$element = $outerDiv;
  }

  App.CommentBox = CommentBox;
  window.App = App;

})(window);
