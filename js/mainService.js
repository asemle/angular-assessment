angular.module('assessment')
.service('mainService', function($http) {
  this.getProducts = function() {
    return $http.get('https://practiceapi.devmounta.in/products')
    .then(function(response) {
      return response;
    })
    .catch(function(err) {
        return err;
    })
  }
  this.getProduct = function(id) {
    return $http.get('https://practiceapi.devmounta.in/products/' + id)
    .then(function(response) {
      return response;
    })
    .catch(function(err) {
        return err;
    })
  }
})
