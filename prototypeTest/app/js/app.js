'use strict';


// Declare app level module which depends on filters, and services
angular.module('planetApp', ['ngRoute']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/welcome', {templateUrl: 'partials/welcome.html'}).
		when('/enter-info', {templateUrl: 'partials/enter-info.html', controller: 'planetData'}).
		when('/show-planets', {templateUrl: 'partials/show-planets.html', controller: 'planetData'}).
		when('/planets/:planetId', {templateUrl: 'partials/planet-detail.html', controller: 'planetData'}).
		otherwise({redirectTo: '/welcome'});
}]);