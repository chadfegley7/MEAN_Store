var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");
module.exports = (function(){
  return{
    show: function(request, response){
      Customer.find({}, function(err, results){
        if(err){
          console.log(err);
        }
        else{
          response.json(results);
        }
      })
    },

    post: function(request, response){
      var new_customer = new Customer({name: request.body.name, created_at: request.body.created_at});
      new_customer.save(function(err){
        if(err){
          console.log("Failed to Add to DB");
        }
        else{
          module.exports.show(request, response);
        }
      })
    }
  };
})();
