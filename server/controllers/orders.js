var mongoose = require("mongoose");
var Order = mongoose.model("Order");

module.exports = (function(){
  return{
    show: function(request, response){
      Order.find({}, function(err, results){
        if(err){
          console.log(err);
        }
        else{
          response.json(results);
        }
      });
    },

    post: function(request, response){
      var new_order = new Order({name: request.body.name, product: request.body.product.trim(), qty: request.body.qty, created_at: request.body.created_at});
      new_order.save(function(err){
        if(err){
          console.log(new_order);
          console.log("Failed to Add to DB");
        }
        else{
          module.exports.show(request, response);
        }
      });
    }
  };
})();
