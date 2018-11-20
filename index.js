var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send({hi: 'there'});
  console.log("main route hit");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("server is running");
