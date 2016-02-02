'use strict';

angular.module('personalSite')

.controller("MainCtrl", ["$scope", "$location", "$http", "postData",
	function($scope, $location, $http, postData){

	$scope.data = postData.posts;

	postData.loadPosts();

	$scope.viewPost = function(postId){
		$location.url('/post/' + postId);
	};
}]);