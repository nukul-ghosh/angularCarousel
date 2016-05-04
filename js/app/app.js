var app = angular.module('angularCarousel', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/accordion');

    $stateProvider
      .state('accordion', {
          url:'/accordion',
          templateUrl:'templates/carousel.html',
          controller:'carouselCTRL'
      });
}]);