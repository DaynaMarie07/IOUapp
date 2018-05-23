// dependencies
var express = require("express");
var bodyParser = require("body-parser");

// setup express app
var app = express();
var PORT = process.env.port || 8080;

// require model for sync
var db = require("./models");

// parse app
app.use(bodyParser.urlencoded({ extended: true }));
 //  .json parse
app.use(bodyParser.json());
// static directory
app.use(express.static("public"));

// routes
require("./routes/api-routes.js")(app);

// sync seq models for express app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});