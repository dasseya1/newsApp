var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var request = require("request");
var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//Require Handlebars
var exphbs = require("express-handlebars");
var Handlebars = require("handlebars");

//Select and set Handlebars as the engine and "main" as the default layout
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Imports the routes from controller
var routes = require('./controllers/controller.js');
app.use('/', routes);

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});
