/**
 * Created by Phu Le on 8/8/14.
 */
var dotaApp = angular.module ('dotaApp', ['ngRoute', 'ngAnimate']);
dotaApp.config (function ($routeProvider, $locationProvider) {

    $routeProvider.when ('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    }).when ('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
    }).when ('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
    }).when ('/heroes', {
        templateUrl: 'pages/heroes.html',
        controller: 'heroesController'
    });
    $locationProvider.html5Mode (true);
    $locationProvider.hashPrefix = '!';
});
dotaApp.controller ('mainController', function ($scope) {
    $scope.pageClass = 'page-home';
    $scope.message = 'All About Dota 2 still in development !';
});

dotaApp.controller ('aboutController', function ($scope) {
    $scope.pageClass = 'page-about';
    $scope.message = 'All About Dota 2 - About ';
});

dotaApp.controller ('contactController', function ($scope) {
    $scope.pageClass = 'page-contact';
    $scope.message = 'All About Dota 2 - Contact Phu Le';
});

dotaApp.controller ('heroesController', function ($scope) {
    $scope.pageClass = 'page-heroes';
    $scope.message = 'Nothing';
});