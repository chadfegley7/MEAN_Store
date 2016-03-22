var mongoose = require("mongoose");

//Creating our new Schema and the rules for each new addition into that collection
var ProductSchema = new mongoose.Schema({
  name: {type: String, required: true},
  product: {type: String, required: true},
  description: {type: String, required: true},
  qty: {type: Number}
});

mongoose.model("Product", ProductSchema);
