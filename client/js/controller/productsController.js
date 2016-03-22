myapp.controller("productsController", function($scope, productFactory){
  $scope.products = [];
  productFactory.getProducts(function(data){
    $scope.products = data;
  });

  $scope.addProduct = function(){
    productFactory.addProduct($scope.new_product, function(data){
      $scope.product = data;
      $scope.new_product = {};
    });
  }
});
