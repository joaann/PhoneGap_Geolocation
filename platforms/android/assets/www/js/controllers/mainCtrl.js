geoApp.controller('mainCtrl', ['$scope', function ($scope) {
    var end, start;
    var watchID = null;
    //geolocation options timeout is set to x msecs, maximum age y msecs
    var options = {enableHighAccuracy: true, maximumAge: 0, timeout:10000};

    $scope.getPos = function () {
        if (watchID != null) navigator.geolocation.clearWatch(watchID);
        start = new Date();
        watchID = navigator.geolocation.getCurrentPosition(function(position) {
            $scope.position = position;
            console.log("got position lat: " + position.coords.latitude + " long: " + position.coords.longitude);
            $scope.$apply();
        }, function(e) { console.log("Error retrieving position " + e.code + " " + e.message) }, options);
            end = new Date();
           	console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
    };
    $scope.stop = function(){
        if(watchID != null){
            navigator.geolocation.clearWatch(watchID);
            watchID=null;
            console.log("stopped watching");
            alert('Stopped watching');
        }
    };
//    var promise;
//    $scope.getCurrentPos = function () {
//        start = new Date();
//    	navigator.geolocation.getCurrentPosition(function(position) {
//    		$scope.position =position;
//    		$scope.$apply();
//    	},function(e) {console.log("Error retrieving position " + e.code + " " + e.message)}
//    	, options)
//    	end = new Date();
//    	console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
//    };
//
//    $scope.start = function () {
//        promise = $interval($scope.getCurrentPos, 1000);
//    };
//
//    $scope.stop = function() {
//        if (angular.isDefined(promise)) {
//            $interval.cancel(promise);
//            console.log('stopped interval');
//            alert('Geolocation Stopped!');
//        }
//    };
}]);
