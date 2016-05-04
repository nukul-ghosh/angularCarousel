app.controller('carouselCTRL', ['$scope', function($scope) {

    $scope.dataset = [1,2,3,4,5];

    $scope.tigger = function(index) {
        if (index == $scope.eventNumber){
          $scope.eventNumber = -1;
          return;
        }
        $scope.eventNumber = index;
    }

}]);
