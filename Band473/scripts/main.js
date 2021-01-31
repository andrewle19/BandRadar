/*
Main.js should only be used to call modules that has specific functions
*/

//suppress console usage warning
/*eslint-disable no-console*/
var DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";

var pictures = ["img/band1.jpg", "img/band2.jpg", "img/band3.jpg", "img/band4.jpg", "img/band5.jpg", "img/band6.jpg", "img/band7.jpg"];
var titles = ["Florence + the Machine", "Two Door Cinema Club", "Walk The Moon", "Death Cab For Cutie", "Nothing But Thieves", "Paramore --------  Riot", "My Chemical Romance"];
//var feed = ["florenceFeed()","twoDoorFeed()","walkTheMoon()","deathCabFeed()","nothingButThievesFeed()", "paramoreFeed()", "myChemicalRomanceFeed()"];
var headArray = ["#FTM","#TDCC","#WTM","#DCFC","#NBT","#P","#MCR"];
//var idFeed = ["florenceFeed","TDCCFeed","WTMFeed","deathCabFeed","nothingButThievesFeed","paramoreFeed","myChemicalRomanceFeed"];


var counter = 0;
var limit = pictures.length; //is the number of items in the pictures array.

//////

var test3 = 0;
var heading1 = 0;

function setDetails(imagePos) {
  "use strict";
  //var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  //detailImage.setAttribute("src", imageUrl);
  var token = 0;
  heading1 = imagePos;


  //document.getElementById("MyElement").className = "MyClass"
  //document.getElementById("flor1").className = "newBands";

  token = checkScroll(imagePos - 1, imagePos);
  document.getElementById(headArray[token]).className="newBands";


  //document.getElementById("#NBT").className = "w3-quarter";
  token = checkScroll(imagePos + 3, imagePos);
  document.getElementById(headArray[token]).className = "w3-quarter";
  //test3 = token;

  /*
  var myFeed = document.getElementById("img1");
  myFeed.src = pictures[imagePos];
  var myTitle = document.getElementById("title1");
  myTitle.textContent = titles[imagePos];
  //document.getElementById("florenceFeed").onclick = function twoDoorFeed();



  var myFeed2 = document.getElementById("img2");
  var myTitle2 = document.getElementById("title2");
  token = checkScroll(imagePos + 1, imagePos);
  myFeed2.src = pictures[token];
  myTitle2.textContent = titles[token];

  var myFeed3 = document.getElementById("img3");
  var myTitle3 = document.getElementById("title3");
  token = checkScroll(imagePos + 2, imagePos);
  myFeed3.src = pictures[token];
  myTitle3.textContent = titles[token];
  test3 = token;

  var myFeed4 = document.getElementById("img4");
  var myTitle4 = document.getElementById("title4");
  token = checkScroll(imagePos + 3, imagePos);
  myFeed4.src = pictures[token];
  myTitle4.textContent = titles[token];

*/
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  //  thumbnails.forEach(addThumbClickHandler);
}

function reply_click(clicked_id) {
  "use strict";
  if (clicked_id == "right") {
    counter += 1;
  } else {
    counter -= 1;
  }

  if (counter > limit - 1 && clicked_id == "right") {
    counter = 0;
  }

  if (counter < 0 && clicked_id == "left") {
    counter = limit - 1;
  }

  setDetails(counter, clicked_id);
  //credit goes to shamittomar, of StackOverflow, for showing how to use the button tag.
}


function checkScroll(tally, imagePos) {
  var diff = tally - imagePos;
  switch (diff) {
  case 1:
    if (tally > limit - 1) {
      tally = 0;
    }
    if (tally < 0) {
      tally = limit - 1;
    }
    break;
  case 2:
    if (tally > limit - 1) {
      tally = 0;
      if (imagePos == (limit - diff + 1)) {
        tally = 1;
      }
    }
    if (tally < 0) {
      tally = limit - 1;
    }
    break;
  case 3:
    if (tally > limit - 1) {
      tally = 0;
      if (imagePos == (limit - diff + 1)) {
        tally = 1;
      }
      if (imagePos == (limit - 1)) {
        tally = 2;
      }
    }
    if (tally < 0) {
      tally = limit - 1;
    }
    break;
  default:
  }
  return tally;
}


//////
(function(window) {
  "use strict";
  //create an App instance to be used

  var App = window.App || {};
  // Use App here to declare and instantiate prototypes to be used
  console.log("Printing contents of App: " + App);

  document.getElementById("mainLanding").onclick = function directToMainPage() {
    window.location.href = "index.html";
  };

  document.getElementById("bandLanding").onclick = function directToBandPage() {
    window.location.href = "bandFeedback.html";
  };

  document.getElementById("aboutLanding").onclick = function directToAbout() {
    window.location.href = "about.html";
  };

  document.getElementById("florenceFeed").onclick = function florenceFeed() {
    window.location.href = "FlorenceFeedSite.html";
  };

  document.getElementById("TDCCFeed").onclick = function twoDoorFeed() {
    window.location.href = "twoDoorCinema.html";
  };

  document.getElementById("WTMFeed").onclick = function walkTheMoon() {
    window.location.href = "walkTheMoon.html";
  };

  document.getElementById("deathCabFeed").onclick = function deathCabFeed() {
    window.location.href = "deathCabForCutie.html";
  };

  document.getElementById("nothingButThievesFeed").onclick = function nothingButThievesFeed() {
    window.location.href = "nothingButThieves.html";
  };

  document.getElementById("paramoreFeed").onclick = function paramoreFeed() {
    window.location.href = "paramore.html";
  };

  document.getElementById("myChemicalRomanceFeed").onclick = function myChemicalRomanceFeed() {
    window.location.href = "myChemicalRomance.html";
  };

})(window);

initializeEvents();
