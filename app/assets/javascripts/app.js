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
      .when('/blog', {
        templateUrl: 'blog.html',
        controller : 'BlogCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
})


.controller("MainCtrl", function($scope, $location){
})

.controller("BlogCtrl", function($scope, $location, $http){
	$scope.posts = [{
			title: 'Loading posts...',
			contents: ''
		}];
	
	loadPosts = function(){
		$http.get('./posts.json').success(function(data){
			$scope.posts = data;
			console.log('Successfully loaded posts.');
		}).error(function() {
			console.error('Failed to load posts.');
		});
	};

	loadPosts();

	$scope.viewPost = function(postId){
		$location.url('/post/' + postId);
	};
});
