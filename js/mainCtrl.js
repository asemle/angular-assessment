angular.module('assessment')
.controller('mainCtrl', function($scope, mainService) {
  mainService.getProducts()
  .then(function(response) {
    $scope.products = response.data;
    console.log(response.data)
  })
})
