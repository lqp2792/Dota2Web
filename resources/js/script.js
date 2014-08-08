/**
 * Created by Phu Le on 8/8/14.
 */
var dotaApp = angular.module ('dotaApp', ['ngRoute']);
dotaApp.config (function ($routeProvider, $locationProvider) {
    $routeProvider.when ('/', {
        templateUrl: 'pages/home.html',
        controller : 'mainController'
    }).when ('/about', {
        templateUrl: 'pages/about.html',
        controller : 'aboutController'
    }).when ('/contact', {
        templateUrl: 'pages/contact.html',
        controller : 'contactController'
    }).otherwise ({redirectTo: '/'});
    $locationProvider.html5Mode (true);
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