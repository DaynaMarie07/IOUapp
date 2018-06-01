
// require Iou model
var db = require("../models");

// Routes
module.exports = function(app) {
  // GET route for all ious
  app.get("/api/ious", function(req, res) {
    console.log("we did it!!!")
    // findAll returns
    db.Iou.findAll({}).then(function(dbIou) {
      // place new IOU in callback
      console.log(dbIou);
      res.json(dbIou);
    });
  });

  // POST route for saving a new Iou
  app.post("/api/ious", function(req, res) {
    console.log(req.body);
    db.Iou.create({
      text: req.body.text,
      places: req.body.places,
      differential: req.body.differential
    }).then(function(dbIou) {
      // place new Iou in the callback
      res.json(dbIou);
    });
  });

  // DELETE route
  app.delete("/api/ious/:id", function(req, res) {

  });

  // PUT route
  app.put("/api/ious", function(req, res) {

  });
};
