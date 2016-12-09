angular.module('assessment')
.directive('product', function() {
  return {
    templateUrl:'views/product-tmpl.html',
    restrict: 'E',
    scope: {
    product: '=product'
    },
    // link: function(scope) {
    //   scope.imageHidden = false;
    //   scope.toggleImage = function() {
    //     scope.imageHidden = !scope.imageHidden;
    //   }
    // }
  }

})
