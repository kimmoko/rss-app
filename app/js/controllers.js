'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', '$http', function($scope, $http) {
	$scope.teksti = 'Foobar!';
	$scope.rssFeed = 'http://showrss.karmorra.info/feeds/schedule/schedule.rss';
	var url = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&callback=JSON_CALLBACK&q=' + $scope.rssFeed;
	
	$http.jsonp(url)
    .success(function(data){
        console.log(data.responseData.feed);
		$scope.data = data;
    });
	
  }])
  .controller('MyCtrl2', [function() {

  }]);