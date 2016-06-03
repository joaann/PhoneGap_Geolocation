geoApp.controller('mainCtrl', ['$scope', function ($scope) {
  document.addEventListener("deviceready", onDeviceReady, false);

  function onDeviceReady() {
      console.log("navigator.geolocation works well");
  }
    var end, start;
    var watchID = null;
    //geolocation options timeout is set to x msecs, maximum age y msecs
    var options = {enableHighAccuracy: true, maximumAge: 0, timeout:10000};

    $scope.getPos = function () {
        var start = new Date().getTime();
        if (watchID != null) navigator.geolocation.clearWatch(watchID);
        watchID = navigator.geolocation.getCurrentPosition(function(position) {
            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
            $scope.timestamp = position.timestamp;
            console.log("got position lat: " + position.coords.latitude + " long: " + position.coords.longitude);
            var end = new Date().getTime();
            console.log('Operation took ' + ((end - start) + ' msec'));
            $scope.time = end - start;
            $scope.$apply();
        }, function(e) {
          alert("Error retrieving position error code: " + e.code + " error message: " + e.message)
        }, options);
    };

}]);
