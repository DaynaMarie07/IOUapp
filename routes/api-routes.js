
// require Iou model
var db = require("../models");

// Routes
module.exports = function(app) {
  // GET route for all ious
  app.get("/api/ious", function(req, res) {
    // findAll returns
    db.Iou.findAll({}).then(function(dbIou) {
      // place new IOU in callback
      res.json(dbIou);
    });
  });

  // POST route for saving a new Iou
  app.post("/api/ious", function(req, res) {
    console.log(req.body);
    db.Iou.create({
      text: req.body.text,
      complete: req.body.complete,
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
