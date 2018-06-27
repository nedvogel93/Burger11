var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
   
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  burger.create([
    'burger'
  ], [
    req.body.burger
  ], function(data) {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.update({
    devoured: true
  }, condition, function(data) {
    res.redirect("/");
  });
});


module.exports = router;