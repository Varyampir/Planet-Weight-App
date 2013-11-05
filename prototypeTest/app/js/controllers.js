'use strict';

/* Controllers */

function initialize($http, $scope) {
    $scope.showPlanets = 0;

    $http.get('http://dgm3790.joehafen.com/solarSystemApp/getData.php').success(function(data) {
        console.dir(data);
        $scope.data=data;
    });

    $scope.storeData = function(){
        $scope.showPlanets = 1;
        $scope.getWeight = $scope.$$childHead.getWeight;
        $scope.getDate = Date.parse($scope.$$childHead.getDate);
        console.dir($scope.getWeight);
        console.dir($scope.getDate);
    }
}

function planetData($scope, $routeParams) {
    
    $scope.planetId = $routeParams.planetId - 1;

	var weightVar = $scope.getWeight;
    var birthdate = $scope.getDate;
	var today = (new Date()).getTime();
	var age = (today - birthdate) / (1000 * 3600 * 24);

    $scope.weightCalc = function (planetWeight) {
    	var weight = int_zero(10 * weightVar * planetWeight) / 10;
    	return weight;
    }

    $scope.ageCalc = function(planetAge) {
    	var days = int_zero(10 * age / planetAge) / 10;
    	return days;
    }

    $scope.getImg = function(planetName) {
        var planetName = angular.lowercase(planetName);
        return planetName;
    }

    // Function to return 0 if result is <1
	function int_zero(x) {
        if ( x < 1 )
            return 0 ;
        else
            return parseInt( x ,10 );
    }
}



    
