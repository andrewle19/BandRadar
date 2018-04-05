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

  // populates the band page based on the bandid clicked on from carousel
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

  // function populates the dom with comments by first searching db with bandid
  function populateComments() {
    // <p>
    //   <strong>@username</strong>
    //   <small>Rating: 5/5</small>
    //   <br>
    //   this band is really awesome everyone should go see them live
    // </p>
    var commentBandid = window.location.search.substring(1);
    // querys through data base with specefic id
    dpd.comments.get({bandid: commentBandid.substring(1)} , function(results, error) {
      if (error) {
        alert(error.message);

      } else {
        console.log(results);

        // appending the information to the page
        for(var i = 0; i < results.length;i++){
          $('#commentfeed').append('<p> <strong>@'+results[i].username+'</strong>'
        +'<small> Rating: '+ results[i].rating + '</small><br>'+ results[i].review + '</p>');
        }

      }
    });

  }




  populatePage();
  populateComments();


  App.Populate = Populate;
  window.App = App;
})(window);
