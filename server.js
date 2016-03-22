var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
require("./server/config/mongoose.js");

app.use(express.static(path.join(__dirname, "./client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");
var Product = mongoose.model("Product");
var Order = mongoose.model("Order");

require("./server/config/routes.js")(app);

app.listen(7777, function(){
  console.log("Order Up at port 7777");
});
