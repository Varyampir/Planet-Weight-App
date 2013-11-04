'use strict';


// Declare app level module which depends on filters, and services
angular.module('planetApp', ['ngRoute']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {templateUrl: 'partials/enter-info.html'}).
		when('/planets/:planetId', {templateUrl: 'partials/planet-detail.html', controller: 'planetData'}).
		otherwise({redirectTo: '/'});
}]);