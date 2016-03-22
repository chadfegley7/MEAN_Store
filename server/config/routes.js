var customers = require("./../controllers/customers.js");
var products = require("./../controllers/products.js");
var orders = require("./../controllers/orders.js");

module.exports = function(app){
  app.get("/customers", function(request, response){
    customers.show(request, response);
  });

  app.get("/products", function(request, response){
    products.show(request, response);
  });

  app.get("/orders", function(request, response){
    orders.show(request, response);
  });

  app.post("/addCustomer", function(request, response){
    customers.post(request, response);
  });

  app.post("/addProduct", function(request, response){
    products.post(request, response);
  });

  app.post("/addOrder", function(request, response){
    orders.post(request, response);
  });
}
