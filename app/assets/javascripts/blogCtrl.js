'use strict';

angular.module('personalSite')

.controller("BlogCtrl", ["$scope", "$routeParams", "postData",
	function($scope, $routeParams, postData){
	
		$scope.data = {postData: postData.posts};

		postData.loadPosts();

		//console.log($scope.data.postData.posts);
		//console.log($scope.data.postId);
		//console.log($scope.data.postData.posts[0]);

		$scope.data.postId = $routeParams.postId;
		//console.log($routeParams);

}])

.factory('postData', ['$http', function($http){
	var postData = {
			posts: [
			{
				title: "Loading...",
				contents: ""
			}
		]
	};

	postData.loadPosts = function(){

			$http.get('./posts.json').success(function(data){
				postData.posts = data;
				console.log('Successfully loaded posts.');
			}).error(function() {
				console.error('Failed to load posts.');
			});
		
	};

	//Add create

	return postData;
}]);