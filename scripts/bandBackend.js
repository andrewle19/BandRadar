(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function bandList(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('Could not find element with selecter ' + selector);
    }
  }

  bandList.prototype.postdata = function (){
    dpd.bands.post({name: document.getElementById('bandName').value, venue: document.getElementById('venue').value,description: document.getElementById('description').value, picture: document.getElementById('pictureURL').value });
  };

  bandList.prototype.postcomment = function () {
    console.log("in post comment");
    dpd.comments.post({
      bandid: 55555,
      username: document.getElementById('username').value,
      review: document.getElementById('review').value,
      rating: document.getElementById('rating').value })
  };
  App.bandList = bandList;
  window.App = App;
})(window);
