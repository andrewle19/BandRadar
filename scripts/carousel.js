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
  // fills the carousels by getting all the band data in the data base
  function fillCarousel (){
    dpd.bands.get({} , function(results, error) {
      if (error) {
        alert(error.message);
      } else {
        console.log(results);
        for (var i = 0; i < results.length; i++) {
          addBands(results[i]);

        }
      }
    });
    //})
    console.log('WE in carousel');
  }

  // Function adds band data to the dom
  function addBands (band){

    var $div = $('<div></div>',{
      'class': 'carousel-item',
      'id': band.name
    });
    var caption = '<div class="carousel-caption"> <h1 class="title is-1 has-text-white-bis">'+ band.name +'</h1></div>';


    var $a = $('<a></a>', {
      'id': 'bandPage'
    });

    var location = 'location.assign("bandPage.html?='+ band.id + '")';
    var $img = $('<img></img>',{
      'onclick': location,
      'class':'d-block w-100',
      'id': band.id,
      src: band.picture,
      'style':'width:100%'
    });

    $div.append($img);
    $div.append($a);
    $div.append(caption);
    $('#bandpages').append($div);

  }
  
  fillCarousel();




  App.Carousel = Carousel;
  window.App = App;
})(window);
