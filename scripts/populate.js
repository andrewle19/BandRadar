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
    // grabs band id from url then strips the string of id=
    var bandid = window.location.search.substring(1);

    // querys through data base with specefic id
    dpd.bands.get({id: bandid.substring(1)} , function(results, error) {
      if (error) {
        alert(error.message);
        
      } else {
        console.log(results);

        // appending the information to the page
        $('#bandname').append('<h1 class="title">'+ results.name + '</h1>');
        $('#bandpic').append('<figure class ="image is-4by3"> <img src="'+results.picture+ '"></figure>');
        $('#desc').append('<h2 class="subtitle">'+ results.description + '</h2>');
        $('#desc').append('<h2 class="subtitle">Venue: '+results.venue+'</h2>');
      }
    });
  }


  populatePage();


  App.Populate = Populate;
  window.App = App;
})(window);
