var mongoose = require("mongoose");
var Product = mongoose.model("Product");

module.exports = (function(){
  return{
    show: function(request, response){
      Product.find({}, function(err, results){
        if(err){
          console.log(err);
        }
        else{
          response.json(results);
        }
      });
    },

    post: function(request, response){
      var new_product = new Product({qty:request.body.qty, description: request.body.description, product: request.body.product, name: request.body.name});
      new_product.save(function(err){
        if(err){
          console.log(new_product);
          console.log("Failed to Add to DB");
        }
        else{
          module.exports.show(request, response);
        }
      });
    }
  };
})();
