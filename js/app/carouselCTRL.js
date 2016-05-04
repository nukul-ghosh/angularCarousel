app.controller('carouselCTRL', ['$scope', function($scope) {

    var preEvent = null;

    $scope.tigger = function(event) {
      if(preEvent && (preEvent != event.currentTarget)){
        preEvent.setAttribute("class","");
      }
      if (event.target.className == ""){
        event.currentTarget.setAttribute("class","opened");
        preEvent = event.currentTarget;
      } else{
        event.currentTarget.setAttribute("class","")
      }

    };

}]);
