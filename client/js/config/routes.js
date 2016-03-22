
//Bringing in our routeProvider so we know what partials to load
myapp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './../static/partials/dashboard.html',
      controller: "productsController"
    })

      .when('/products', {
        templateUrl: './../static/partials/productsList.html',
        controller: "productsController"
      })

      .when('/orders', {
        templateUrl: './../static/partials/ordersList.html',
        controller: "ordersController"
      })

      .when('/customers', {
        templateUrl: './../static/partials/customersList.html',
        controller: "customersController"
      })

      .otherwise({
        redirectTo: "/"
      });
})
