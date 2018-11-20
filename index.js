var express = require("express");
var app = express();
var ejs = require("ejs");

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.send({bye: 'buddy'});
  console.log("main route hit");
});

app.get("/annie", function(req, res){
  res.render("annie");
  console.log("annie page hit");
});

app.get("*", function(req, res){
  res.render("catch");
  console.log("catch hit");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("server is running");
