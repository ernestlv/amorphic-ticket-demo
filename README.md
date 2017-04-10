# Amorphic Ticket Demo
## Purpose
This project demonstrates how to use Amorphic by providing a complete example.  It uses MongoDB though it can easily be converted to MongoDB.

## Installation

* Install MongoDB if you have not already done so
* Checkout this project from github
* Do an npm update to bring in the latest node modules (NPM 3.x required)
* Run app.js with these parameters: --dbname myticketdb -port 3001
* SEE Notes for VUE DEMO (below) FIRST
* Go to http://localhost:3001
* Put the application through it's paces:
    * Register and email and password
    * Login
    * Go to Projects and create a project or two
    * Go to Tickets and create a ticket or two
* If you want the email sending to work you need to setup an account on Mandril (see amorphic mandril)

## VUE DEMO Instructions
* As of today the Vue Demo only implements the top menu
* It contains Four Components:
* main-menu.vue - HTML + Logic to select public or private menu depending on user logged in status
* public-menu.vue - HTML + Options to Navigate to public routes
* private-menu.vue - HTML + Options to Navigate to private routes
* dropdown-menu.vue - HTML to display bootstrap dropdown in private menu
* We use a Vuex Store to encapsulate the Amoprhic controller and decouple it from the UI components
* To Run the VUE demo, after You did npm Install and Run app.js as explained above
* Do npm webpack -g
* Then run webpack from the project root folder
* Then go to Go to http://localhost:3001

## License

Amorphic is licensed under the MIT license