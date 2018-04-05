### Project 1 Band Feedback

###### Scope
The website's scope is to provide direct feedback for recent Band Performances. The user can write up reviews from a past band performance. The users can see other users reviews of other band performances. 

The purpose for this project is to create a simple and easy webpage for bands to use for 
their fans/critics to voice their opinions of their performance.

This project was designed to give us experience in creating a webpage with a team

The overall goal for BandRadar is to create a website for bands
This website will allow pictures of each band.
A description section for describing the band, the memember, the name, where they are located, and 
what ever else the band wants people to know about them.

There will be a way to navigate the pages of the website by clicking on the band's thumbnail.
There will be a way to go back to the home page from wherever we are in the website.
There will need to be a backend for storing information on the band
The website needs to incorporate a comments section for the users to write into.
The comments need to be stored in the backend and loaded to the apprpriate pages.

The website needs to easily add new bands to the list.
the website cannot look like something from the 90s! Need to make it look good.



###### Comment
Project Website Made by: 
Andrew David Le, 
Eric Christopher Fratzke,
David Moreno,
Swati Sahoo,
Edgard L. A. Sanchez,
Jonathan Michael Vega

The main html and script for the feature comment is feedbackform.html and feedback.js

To run this website you need to run the backend first of the deployd database than run browsersync to get the webpage up and running.

###################################

Install node.js

$ curl -s -L http://git.io/n-install | bash -s -- -y

$ . $HOME/.bashrc

$ npm update -g



Install MongoDB and Deployd.

$ sudo apt update

$ sudo apt install -y mongodb

$ sudo systemctl stop mongodb

$ sudo systemctl disable mongodb

$ npm install deployd-cli -g


Create a new Deployd app for backend and open the dashboard:

$ dpd create backend

$ cd backend

$ dpd -d

Use the Deployd dashboard to create a Collection for backend. 

Open Terminal and locate folder "BandRadar"

$ browser-sync start --server --files "stylesheets/*.css, .html, scripts/.js"

This opens the project on your default Browser


