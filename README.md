### Project 1 Band Feedback

###### Scope
The website's scope is to provide direct feedback for recent Band Performances. The user can write up reviews from a past band performance. The users can see other users reviews of other band performances. 

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


Install node.js
$ curl -s -L http://git.io/n-install | bash -s -- -y
$ . $HOME/.bashrc
$ npm update -g


Install MongoDB and Deployd.
If you are using the Ubuntu MATE VM and have completed Homework 0, you should already have an updated version of Node.js installed. Use the following shell commands:
$ sudo apt update
$ sudo apt install -y mongodb
$ sudo systemctl stop mongodb
$ sudo systemctl disable mongodb
$ npm install deployd-cli -g


Create a new Deployd app for commentReview-backend and open the dashboard:
$ dpd create commentReview-backend
$ cd commentReview-backend
$ dpd -d


run $ browser-sync start --server --files "stylesheets/*.css, .html, scripts/.js"

To open feedback form:
localhost:3000/feedbackform.html
