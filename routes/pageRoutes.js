var express = require("express"),
  app = express(),
  ejs = require("ejs");

module.exports = app => {
  app.get("/", function(req, res) {
    res.render("annie");
    console.log("annie page hit");
  });

  app.get("*", function(req, res) {
    res.render("catch");
    console.log("catch hit");
  });
};