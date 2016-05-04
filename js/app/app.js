var app = angular.module('angularCarousel', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('accordion', {
          url:'/accordion',
          templateUrl:'templates/carousel.html',
          controller:'carouselCTRL'
      })
      .state('login', {
      		url:'/login',
      		templateUrl:'templates/login.html',
      		controller:'loginCTRL'
      });
}]);