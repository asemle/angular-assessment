angular.module('assessment')
    .controller('detailsCtrl', function($scope, $stateParams, mainService) {
        mainService.getProduct($stateParams.id)
            .then(function(response) {
                $scope.product = response.data;
            })
    })
