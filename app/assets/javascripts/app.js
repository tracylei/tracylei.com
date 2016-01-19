'use strict';

angular.module('personalSite',[
  'templates',
  'ngRoute'
])

.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller : 'MainCtrl',
      })
      .when('/blog/:postId', {
        templateUrl: 'post.html',
        controller : 'BlogCtrl',
      })
      .when('/projects',{
      	templateUrl: 'projects.html'
      	//Create projects model
      })
      .when('/contact', {
      	templateUrl: 'contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
})


.controller("MainCtrl", ["$scope", "$location", "$http", "postData",
	function($scope, $location, $http, postData){

	$scope.data = postData.data;

	postData.loadPosts();

	$scope.viewPost = function(postId){
		$location.url('/post/' + postId);
	};
}])

.controller("BlogCtrl", ["$scope", "$routeParams", "postData",
	function($scope, $routeParams, postData){
	
		$scope.data = {postData: postData.data};

		postData.loadPosts();

		console.log($scope.data.postData.posts);
		console.log($scope.data.postId);
		console.log($scope.data.postData.posts[0]);

		$scope.data.postId = $routeParams.postId;
		console.log($routeParams);

}])

.factory('postData', ['$http', function($http){
	var postData = {
		data: {
			posts: [
			{
				title: "Loading...",
				contents: ""
			}
		]},
		isLoaded: false
	};

	postData.loadPosts = function(){

		if(!postData.isLoaded){

			$http.get('./posts.json').success(function(data){
				postData.data.posts = data;
				postData.isLoaded = true;
				console.log('Successfully loaded posts.');
			}).error(function() {
				console.error('Failed to load posts.');
			});
		}
	};

	return postData;
}]);
