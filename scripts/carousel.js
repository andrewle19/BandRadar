(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function Carousel(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('Could not find element with selecter ' + selector);
    }
  }

  function fillCarousel (){
    dpd.bands.get({$fields: {picture: 1}} , function(results, error) {
      if (error) {
        alert(error.message);
      } else {
        console.log(results);
        //name = 'L@gmail.com';
        //name = results[0].username;
        //console.log(name);
        for (var i = 0; i < results.length; i++) {
          var rowElement = new addBands(results[i]);

        }
      }
    });
    //})
    console.log('WE in carousel');
  }

  function addBands (band){

    var $div = $('<div></div>',{
      'class': 'carousel-item',
      'id': band.name
    });

    var $a = $('<a></a>', {
      'id': 'bandPage'
    });

    var $img = $('<img></img>',{
      'onclick': ' location.assign("bandPage.html");',
      'class':'d-block w-100',
      src: band.picture,
      'style':'width:100%'
    });

    $div.append($img);
    $div.append($a);
    $('#bandpages').append($div);
    $('#dick').append('<h1>dick</h1>');
  }
  fillCarousel();
  $('#desc').append('<h1>dick</h1>');




  App.Carousel = Carousel;
  window.App = App;
})(window);
