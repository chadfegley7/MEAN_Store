myapp.controller("ordersController", function(orderFactory, customerFactory, productFactory, $scope){
  $scope.orders = [];
  $scope.products = [];
  $scope.users = [];
  $scope.new_order ={};
  $scope.user_names = [];

  orderFactory.getOrders(function(data){
    $scope.orders = data;
  });

  customerFactory.getCustomers(function(data){
    $scope.users = data;
  });

  productFactory.getProducts(function(data){
    $scope.products = data;
  });

  $scope.addOrder = function(){
    $scope.new_order.created_at = new Date();
    orderFactory.addOrder($scope.new_order, function(data){
      $scope.orders = data;
      $scope.new_order = {};
    });
  }
});
