var app = angular.module('angularCarousel', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/carousel');

    $stateProvider
      .state('carousel', {
          url:'/carousel',
          templateUrl:'templates/carousel.html',
          controller:'carouselCTRL'
      });
}]);