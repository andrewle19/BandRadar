(function(window) {
    "use strict";
    //create an App instance to be used
    var App = window.App || {};

    // Use App here to declare and instantiate prototypes to be used
    console.log("Printing contents of App: " + App);

    document.getElementById("MisfitsGo").onclick = function misfitsVideo() {
        window.src = "https://www.youtube.com/watch?v=ZwoS_Vyt1Ig";
    };
}) (window);


