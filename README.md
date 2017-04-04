# Amorphic Ticket Demo
## Purpose
This project demonstrates how to use Amorphic by providing a complete example.  It uses MongoDB though it can easily be converted to MongoDB.

## Installation

* Install MongoDB if you have not already done so
* Checkout this project from github
* Do an npm update to bring in the latest node modules (NPM 3.x required)
* Run app.js with these parameters: --dbname myticketdb -port 3001
* Go to http://localhost:3001
* Put the application through it's paces:
    * Register and email and password
    * Login
    * Go to Projects and create a project or two
    * Go to Tickets and create a ticket or two
* If you want the email sending to work you need to setup an account on Mandril (see amorphic mandril)

## Angular 2
```
$ npm i
$ brew install nginx
$ sudo nginx -s stop
$ sudo nginx -c path_to_nginx.conf
$ mongod
$ node_modules/typescript/bin/tsc
$ gulp webpack
$ node app.js
```
## Vue
`
$ npm i
`

remove some lines in *node_modules/amorphic-bindster/bindster-amorphic.js* as following:
```
if (!bindster) {
    // bindster = new Bindster(controller, null, controller, null, true);
    // bindster.alert = function (msg) {
        //controller.serverLog(msg);
        // alert(msg);
    // }
    if (typeof(controller.clientInit) == "function")
        controller.clientInit(sessionExpiration);
    // bindster.start();
} else {
    // bindster.setModel(controller)
    // bindster.setController(controller);
    if (typeof(controller.clientInit) == "function")
        controller.clientInit(sessionExpiration);
    controller.refresh(1);
}
```
```
$ mongod
$ node_modules/typescript/bin/tsc #or tsc if installed globally
$ npm run dev
```
## License
Amorphic is licensed under the MIT license