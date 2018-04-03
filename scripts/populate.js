(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function Populate(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('Could not find element with selecter ' + selector);
    }
  }

  function populatePage (){
    dpd.bands.get({$fields: {description: 1}} , function(results, error) {
      if (error) {
        alert(error.message);
      } else {
        console.log(results[0].description);
        //name = 'L@gmail.com';
        //name = results[0].username;
        //console.log(name);
        $('#desc').append('<h2 class="subtitle">',results[0].description,'</h2>');
        $('#desc').append('<h2 class="subtitle">Venue:',results[0].venue,'</h2>');
        $('#desc').append('<h2 class="subtitle">' )
      }
    });
    //})

  }


  populatePage();


  App.Populate = Populate;
  window.App = App;
})(window);
