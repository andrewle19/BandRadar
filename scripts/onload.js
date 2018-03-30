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
      // console.log(serverResponse);
      // var CHECKLIST_SELECTOR = '[data-band-comment="form"]';
      // var CheckList = App.CheckList;
      // var list = new CheckList(CHECKLIST_SELECTOR);
      for (var i = 0; i < serverResponse.length; i++) {
        
        var bandInfo = {
          'bandname': serverResponse[i]['bandname'],
          'username': serverResponse[i]['username'],
          'review': serverResponse[i]['review'],
          'rating': serverResponse[i]['rating']
        };
        // list.addRow.call(list, coffeorder);
        console.log(bandInfo);
      }
    });
  };


  App.Refresher = Refresher;
  window.App = App;

})(window);
