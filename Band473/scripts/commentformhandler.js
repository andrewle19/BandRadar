(function(window) {
  'use strict';
  //create
  var App = window.App || {};
  var $ = window.jQuery;

  //create a window comment handler constructor
  function CommentFormHandler(selector) {
    if(!selector) {
      throw new Error('No selector provided');
    }

    // $formElement is a comment handler property we are creating here
    this.$formElement = $(selector);

    if(this.$formElement.length == 0) {
      throw new Error('Could not find element with selector' + selector);
    }
  }

  //Add a submit handler prototype
  CommentFormHandler.prototype.addSubmitHandler = function(fn) {
    console.log('Setting submit handler for comment form');

    this.$formElement.on('submit', function(event) {
      event.preventDefault();
      // create an empty data obj
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + ' has a value: ' + item.value);
      });
      //show what is the current data from the form
      console.log(data);
      // when clicked, pass this in the callback to give access to other
      // function the data
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };


  //restore
  App.CommentFormHandler = CommentFormHandler;
  window.App = App;
})(window);
