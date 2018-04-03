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
        //name = "L@gmail.com";
        //name = results[0].username;
        //console.log(name);
        /*for (var i = 0; i < results.length; i++) {
          var rowElement = new addPicDom(results[i],results[i].username);
          $(".bandpages").append(rowElement.$element);
        }*/

      }
    });
  //})
    //$('#bandpages').append(template);
    console.log('WE in carousel');
  }

  fillCarousel();

  App.Carousel = Carousel;
  window.App = App;
})(window);

//var template =
/*
"<div class='carousel-item'> \
  <a href='#FTM' onclick='florenceFeed()' id='florenceFeed'>\
  <img class='d-block w-100' src='img/band1.jpg' alt='band1' style='width:100%'>\
</a>\
</div> "*/
