'use strict';

/* Controllers */

function planetData($scope, $http) {
    $http.get('http://dgm3790.joehafen.com/solarSystemApp/getData.php').success(function(data) {
        console.dir(data);
        $scope.data=data;
    });
}