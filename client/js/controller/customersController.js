var myapp = angular.module("myapp", ["ngRoute"]);

myapp.controller("customersController", function($scope, customerFactory){

  $scope.customers =[];
  customerFactory.getCustomers(function(data){
    $scope.customers = data;
  });

  $scope.addCustomer = function(){
    $scope.new_customer.created_at = new Date();
    customerFactory.addCustomer($scope.new_customer, function(data){
      $scope.customer = data;
      $scope.new_customer ={};
    });
  }

  $scope.removeCustomer = function(customer){
    customerFactory.removeCustomer(customer, function(data){
      $scope.customers =data;
    });
  }
});
