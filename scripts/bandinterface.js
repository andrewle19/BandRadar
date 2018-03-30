/*
{
	"type": "Collection",
	"properties":
		"bandname":
		"username":
		"review":
		"rating":
}
    Programmer: Edgard Luigi Sanchez
    Date: 3/29
    Desc:
      This script handles sending local data to the database
      I plan to use a backend that uses these properties
*/
(function() {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function BandInterface(url) {
    console.log('Band interface initialized.' + url);
    if (!url) {
      throw new Error('No remote URL supplied.');
    }
    this.serverUrl = url;

  }
  //key is the user name
  //val is the review, rating, and band name
  BandInterface.prototype.add = function(key, val) {
    //using jQuery's post method     .post[url,data]
    $.post(this.serverUrl, val, function(serverResponse) {
      console.log('Adding to server using post: '+serverResponse);
    });
  };

  BandInterface.prototype.get = function(key, cb) {
    $.get(this.serverUrl + '/' + key, function(serverResponse) {
      // console.log('Printing serverResponse obj.');
      cb(serverResponse);
    });
  };



  /*remove funciont will call get() and pass a IIFE to process the response data
  from the server. The JSON object returned is then extracted of its id to be suppresed
  for DELETE request to the server

  */
  // THIS IS NOT NEEDED CURRENTLY
  //
  // BandInterface.prototype.remove = function(key) {
  //   //find the id of what I want to delete since API requires the id to send a DELETE request
  //   //get the specific item from back-end using 'username' property
  //   this.get('?{"username":"' + key + '"}', function(data) {
  //
  //     // this deletes all reviews of this username from all bands
  //     console.log('deleting review for user:' + key);
  //     for (var i = 0; i < data.length; i++) {
  //
  //       $.ajax(this.serverUrl + '/' + data[i]['id'], {
  //         type: 'DELETE'
  //       });
  //     }
  //   }.bind(this));
  // };



  App.BandInterface = BandInterface;
  window.App = App;
})(window);
